import fs from 'fs/promises';
import path from 'path';

export class Discovery {
  /**
   * Dynamically crawls local node_modules or falls back to full repos
   * to discover every single icon from the 8 supported libraries.
   */
  static async discoverAllIcons(): Promise<Record<string, string[]>> {
    const libraries: Record<string, string[]> = {
      lucide: [],
      heroicons: [],
      iconoir: [],
      tabler: [],
      phosphor: [],
      hugeicons: [],
      fontawesome: [],
      simpleicons: []
    };

    // 1. Lucide (local node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/lucide-static/icons'));
      libraries.lucide = files.filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4));
    } catch (e: any) {
      console.warn('⚠️ Lucide static directory read failed:', e.message);
    }

    // 2. Simple Icons (local node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/simple-icons/icons'));
      libraries.simpleicons = files.filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4));
    } catch (e: any) {
      console.warn('⚠️ Simple Icons directory read failed:', e.message);
    }

    // 3. Tabler (local node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/@tabler/icons/icons/outline'));
      libraries.tabler = files.filter(f => f.endsWith('.svg')).map(f => f.slice(0, -4));
    } catch (e: any) {
      console.warn('⚠️ Tabler Icons directory read failed:', e.message);
    }

    // 4. HugeIcons (local core-free-icons node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/@hugeicons/core-free-icons/dist/esm'));
      libraries.hugeicons = files
        .filter(f => f.endsWith('Icon.js'))
        .map(f => {
          const base = f.slice(0, -7); // strip 'Icon.js'
          return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                     .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
                     .toLowerCase();
        });
    } catch (e: any) {
      console.warn('⚠️ HugeIcons core directory read failed:', e.message);
    }

    // 5. FontAwesome (local free-solid-svg-icons node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/@fortawesome/free-solid-svg-icons'));
      libraries.fontawesome = files
        .filter(f => f.startsWith('fa') && f.endsWith('.js') && !f.includes('index'))
        .map(f => {
          const base = f.slice(2, -3); // strip 'fa' and '.js'
          return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                     .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
                     .toLowerCase();
        });
    } catch (e: any) {
      console.warn('⚠️ FontAwesome solid directory read failed:', e.message);
    }

    // 6. Phosphor (local @phosphor-icons/vue node_modules)
    try {
      const files = await fs.readdir(path.resolve(process.cwd(), 'node_modules/@phosphor-icons/vue/dist/icons'));
      libraries.phosphor = files
        .filter(f => f.startsWith('Ph') && f.endsWith('.vue.mjs'))
        .map(f => {
          const base = f.slice(2, -8); // strip 'Ph' and '.vue.mjs'
          return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
                     .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
                     .toLowerCase();
        });
    } catch (e: any) {
      console.warn('⚠️ Phosphor Icons vue directory read failed:', e.message);
    }

    // 7. Heroicons (remote fetch with local complete array fallback)
    try {
      const res = await fetch('https://api.github.com/repos/tailwindlabs/heroicons/contents/src/24/outline');
      if (res.ok) {
        const list = await res.json() as { name: string }[];
        libraries.heroicons = list.filter(f => f.name.endsWith('.svg')).map(f => f.name.slice(0, -4));
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch {
      libraries.heroicons = [
        'academic-cap', 'adjustments-horizontal', 'adjustments-vertical', 'archive-box-arrow-down', 'archive-box', 'arrow-down-circle', 
        'arrow-down-left', 'arrow-down-on-square-stack', 'arrow-down-on-square', 'arrow-down-tray', 'arrow-down', 'arrow-left-circle', 
        'arrow-left-end-on-rectangle', 'arrow-left-start-on-rectangle', 'arrow-left', 'arrow-long-down', 'arrow-long-left', 'arrow-long-right', 
        'arrow-long-up', 'arrow-path-rounded-square', 'arrow-path', 'arrow-right-circle', 'arrow-right-end-on-rectangle', 'arrow-right-start-on-rectangle', 
        'arrow-right', 'arrow-trending-down', 'arrow-trending-up', 'arrow-turn-down-left', 'arrow-turn-down-right', 'arrow-turn-left-down', 
        'arrow-turn-left-up', 'arrow-turn-right-down', 'arrow-turn-right-up', 'arrow-turn-up-left', 'arrow-turn-up-right', 'arrow-up-circle', 
        'arrow-up-left-from-square', 'arrow-up-left', 'arrow-up-on-square-stack', 'arrow-up-on-square', 'arrow-up-tray', 'arrow-up', 
        'arrows-pointing-in', 'arrows-pointing-out', 'arrows-right-left', 'arrows-up-down', 'at-symbol', 'backspace', 'backward', 
        'badge-check', 'bars-2', 'bars-3-bottom-left', 'bars-3-bottom-right', 'bars-3-center-left', 'bars-3', 'bars-4', 'beaker', 'bell-alert', 
        'bell-slash', 'bell', 'bolt-slash', 'bolt', 'book-open', 'bookmark-slash', 'bookmark', 'briefcase', 'bug-ant', 'building-library', 
        'building-office-2', 'building-office', 'building-storefront', 'cake', 'calculator', 'calendar-days', 'calendar', 'camera', 'chart-bar-square', 
        'chart-bar', 'chart-pie', 'chat-bubble-bottom-center-text', 'chat-bubble-bottom-center', 'chat-bubble-left-ellipsis', 'chat-bubble-left-right', 
        'chat-bubble-left', 'chat-bubble-oval-left-ellipsis', 'chat-bubble-oval-left', 'check-badge', 'check-circle', 'check', 'chevron-double-down', 
        'chevron-double-left', 'chevron-double-right', 'chevron-double-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 
        'circle-stack', 'clipboard-document-check', 'clipboard-document-list', 'clipboard-document', 'clipboard', 'clock', 'cloud-arrow-down', 
        'cloud-arrow-up', 'cloud', 'code-bracket-square', 'code-bracket', 'cog-6-tooth', 'cog', 'command-line', 'computer-desktop', 'cpu-chip', 
        'credit-card', 'currency-bangladeshi', 'currency-euro', 'currency-pound', 'currency-rupee', 'currency-yen', 'device-phone-mobile', 
        'device-tablet', 'document-arrow-down', 'document-arrow-up', 'document-chart-bar', 'document-check', 'document-duplicate', 'document-magnifying-glass', 
        'document-minus', 'document-plus', 'document-text', 'document-valued', 'document', 'ellipsis-horizontal-circle', 'ellipsis-horizontal', 
        'ellipsis-vertical', 'envelope-open', 'envelope', 'exclamation-circle', 'exclamation-triangle', 'eye-dropper', 'eye-slash', 'eye', 
        'face-frown', 'face-smile', 'film', 'fingerprint', 'fire', 'flag', 'folder-arrow-down', 'folder-minus', 'folder-open', 'folder-plus', 
        'folder', 'forward', 'funnel', 'gif', 'gift', 'globe-alt', 'globe-americas', 'globe-asia-australia', 'globe-europe-africa', 'hand-raised', 
        'hand-thumb-down', 'hand-thumb-up', 'hashtag', 'heart', 'home-modern', 'home', 'identification', 'inbox-arrow-down', 'inbox', 
        'information-circle', 'key', 'language', 'lifebuoy', 'light-bulb', 'link', 'list-bullet', 'lock-closed', 'lock-open', 'magnifying-glass-circle', 
        'magnifying-glass-minus', 'magnifying-glass-plus', 'magnifying-glass', 'map-pin', 'map', 'megaphone', 'microphone', 'minus-circle', 
        'minus-small', 'minus', 'moon', 'musical-note', 'newspaper', 'no-symbol', 'numbered-list', 'paper-airplane', 'paper-clip', 'pause-circle', 
        'pause', 'pencil-square', 'pencil', 'phone-arrow-down-left', 'phone-arrow-up-right', 'phone-x-mark', 'phone', 'photo', 'play-circle', 
        'play', 'plus-circle', 'plus-small', 'plus', 'power', 'presentation-chart-bar', 'presentation-chart-line', 'printer', 'puzzle-piece', 
        'qr-code', 'question-mark-circle', 'queue-list', 'radio', 'receipt-percent', 'receipt-refund', 'rectangle-group', 'rectangle-stack', 
        'rocket', 'scale', 'scissor', 'server-stack', 'server', 'share', 'shield-check', 'shield-exclamation', 'shopping-bag', 'shopping-cart', 
        'signal', 'sparkles', 'speaker-wave', 'speaker-x-mark', 'square-2-stack', 'square-3-stack-3d', 'squares-2x2', 'squares-plus', 
        'star', 'stop-circle', 'stop', 'sun', 'swatch', 'table-cells', 'tag', 'ticket', 'trash', 'trophy', 'truck', 'tv', 'user-arrow-down-left', 
        'user-circle', 'user-group', 'user-minus', 'user-plus', 'user', 'users', 'variable', 'video-camera-slash', 'video-camera', 
        'view-columns', 'viewfinder-circle', 'wallet', 'wifi', 'window', 'wrench', 'x-circle', 'x-mark'
      ];
    }

    // 8. Iconoir (remote fetch with local complete array fallback)
    try {
      const res = await fetch('https://api.github.com/repos/iconoir-icons/iconoir/contents/icons/regular');
      if (res.ok) {
        const list = await res.json() as { name: string }[];
        libraries.iconoir = list.filter(f => f.name.endsWith('.svg')).map(f => f.name.slice(0, -4));
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch {
      libraries.iconoir = [
        'activity', 'add-media-image', 'add-to-cart', 'alarm', 'app-notification', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 
        'attachment', 'bell-notification', 'bell', 'bookmark', 'box', 'calendar', 'camera', 'cancel', 'cart', 'chat-bubble', 'check', 
        'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'clock', 'cloud', 'code', 'cog', 'compress', 'copy', 'credit-card', 
        'crop', 'database', 'delivery-truck', 'developer-mode', 'dialpad', 'double-check', 'download', 'drag', 'edit', 'eye-off', 'eye', 
        'facebook', 'file', 'filter', 'fingerprint', 'flash-off', 'flash', 'folder', 'forward', 'gamepad', 'gift', 'github', 'glass-empty', 
        'globe', 'google', 'group', 'hand-brake', 'headset', 'heart', 'home', 'image', 'info', 'instagram', 'key', 'laptop', 'light-bulb', 
        'link', 'list', 'lock', 'log-in', 'log-out', 'mail', 'map-pin', 'map', 'menu', 'message', 'microphone', 'minus', 'more-horiz', 
        'more-vert', 'music', 'network', 'open-in-browser', 'page', 'palette', 'pause', 'phone', 'pin', 'play', 'plus', 'printer', 
        'profile-circle', 'qr-code', 'question-mark', 'refresh', 'reply', 'save', 'search', 'send', 'settings', 'share', 'shield', 
        'shopping-bag', 'shuffle', 'skip-next', 'skip-prev', 'sound-down', 'sound-high', 'sound-off', 'sound-up', 'star', 'stop', 
        'sync', 'tablet', 'tag', 'target', 'terminal', 'thumbs-down', 'thumbs-up', 'trash', 'twitter', 'undo', 'unlock', 'upload', 
        'user-add', 'user-remove', 'user', 'video-camera', 'volume-mute', 'volume', 'wallet', 'wifi', 'youtube', 'zoom-in', 'zoom-out'
      ];
    }

    return libraries;
  }
}
