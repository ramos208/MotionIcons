import fs from 'fs/promises';
import path from 'path';

const GITHUB_FALLBACKS: Record<string, string> = {
  lucide: 'https://raw.githubusercontent.com/lucide-icons/lucide/main/icons',
  heroicons: 'https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/24/outline',
  iconoir: 'https://raw.githubusercontent.com/iconoir-icons/iconoir/main/icons/regular',
  tabler: 'https://raw.githubusercontent.com/tabler/tabler-icons/master/icons',
  phosphor: 'https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular',
  hugeicons: 'https://raw.githubusercontent.com/hugeicons/hugeicons/main/svgs/stroke/rounded',
  fontawesome: 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid',
  simpleicons: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons'
};

const LOCAL_FALLBACKS: Record<string, string> = {
  lucide: path.resolve(process.cwd(), 'node_modules/lucide-static/icons'),
  simpleicons: path.resolve(process.cwd(), 'node_modules/simple-icons/icons'),
  tabler: path.resolve(process.cwd(), 'node_modules/@tabler/icons/icons/outline')
};

export class Downloader {
  /**
   * Downloads or copies a single SVG icon from local cache or remote raw CDN.
   * Employs robust retry logic with exponential backoff.
   */
  static async downloadIcon(library: string, iconName: string, retriesRemaining = 1, delay = 100): Promise<string> {
    const fileName = `${iconName}.svg`;
    
    // 1. Try local node_modules first for lucide, simpleicons, tabler
    const localDir = LOCAL_FALLBACKS[library.toLowerCase()];
    if (localDir) {
      try {
        const localPath = path.join(localDir, fileName);
        return await fs.readFile(localPath, 'utf8');
      } catch {
        // Fall back to remote download if local file is missing
      }
    }

    // 2. Try parsing FontAwesome directly from node_modules (100% offline & instant)
    if (library.toLowerCase() === 'fontawesome') {
      try {
        const pascal = iconName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
        const fileNameFA = `fa${pascal}.js`;
        const localPath = path.resolve(process.cwd(), 'node_modules/@fortawesome/free-solid-svg-icons', fileNameFA);
        const content = await fs.readFile(localPath, 'utf8');
        
        const matchWidth = content.match(/var width\s*=\s*(\d+)/);
        const matchHeight = content.match(/var height\s*=\s*(\d+)/);
        const matchPath = content.match(/var svgPathData\s*=\s*['"]([^'"]+)['"]/);
        
        if (matchWidth && matchHeight && matchPath) {
          const w = matchWidth[1];
          const h = matchHeight[1];
          const d = matchPath[1];
          return `<svg viewBox="0 0 ${w} ${h}"><path d="${d}" fill="currentColor"/></svg>`;
        }
      } catch {
        // Fall back if local file parser fails
      }
    }

    // 3. Try parsing HugeIcons directly from node_modules (100% offline & instant)
    if (library.toLowerCase() === 'hugeicons') {
      try {
        const pascal = iconName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
        const fileNameHI = `${pascal}Icon.js`;
        const localPath = path.resolve(process.cwd(), 'node_modules/@hugeicons/core-free-icons/dist/esm', fileNameHI);
        const content = await fs.readFile(localPath, 'utf8');
        
        const matches = [...content.matchAll(/\["path",\s*\{\s*d:\s*"([^"]+)"/g)];
        if (matches.length > 0) {
          const paths = matches.map(m => `<path d="${m[1]}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>`).join('');
          return `<svg viewBox="0 0 24 24">${paths}</svg>`;
        }
      } catch {
        // Fall back if local file parser fails
      }
    }

    // 4. Fetch from raw CDN fallback
    const baseUrl = GITHUB_FALLBACKS[library.toLowerCase()];
    if (!baseUrl) {
      throw new Error(`Unsupported icon library: ${library}`);
    }

    const url = `${baseUrl}/${fileName}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      return await response.text();
    } catch (err: any) {
      if (retriesRemaining > 0) {
        console.warn(`    ⚠️ Failed to download ${library}/${iconName}. Retrying in ${delay}ms... (${retriesRemaining} retries left)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.downloadIcon(library, iconName, retriesRemaining - 1, delay * 2);
      }
      throw new Error(`Max retries reached. Failed to download ${library}/${iconName}: ${err.message}`);
    }
  }
}
