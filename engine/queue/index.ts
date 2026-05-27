import fs from 'fs/promises';
import path from 'path';

export interface ProgressState {
  processed: string[];
  failed: Record<string, { attempts: number; lastError: string }>;
  counts: Record<string, number>;
}

const REGISTRY_DIR = path.resolve(process.cwd(), 'registry');
const PROGRESS_FILE = path.join(REGISTRY_DIR, 'progress.json');
const DUPLICATES_FILE = path.join(REGISTRY_DIR, 'duplicates.json');

export class Queue {
  /**
   * Initializes persistent storage registry paths.
   */
  static async initRegistry(): Promise<void> {
    await fs.mkdir(REGISTRY_DIR, { recursive: true });
    
    try {
      await fs.access(PROGRESS_FILE);
    } catch {
      const defaultState: ProgressState = { processed: [], failed: {}, counts: {} };
      await fs.writeFile(PROGRESS_FILE, JSON.stringify(defaultState, null, 2));
    }

    try {
      await fs.access(DUPLICATES_FILE);
    } catch {
      await fs.writeFile(DUPLICATES_FILE, JSON.stringify([], null, 2));
    }
  }

  /**
   * Reads persistent progress state for crash recovery.
   */
  static async loadProgress(): Promise<ProgressState> {
    await this.initRegistry();
    const data = await fs.readFile(PROGRESS_FILE, 'utf8');
    return JSON.parse(data);
  }

  /**
   * Writes the persistent progress state to disk.
   */
  static async saveProgress(state: ProgressState): Promise<void> {
    await fs.writeFile(PROGRESS_FILE, JSON.stringify(state, null, 2));
  }

  /**
   * Simple Levenshtein distance alias check to find near-duplicate icons.
   */
  static async checkDuplicateSimilarity(iconName: string): Promise<void> {
    const data = await fs.readFile(DUPLICATES_FILE, 'utf8');
    const registry: any[] = JSON.parse(data);

    const standardIcons = ['search', 'bell', 'cloud', 'settings', 'gear', 'lock', 'user', 'home'];
    const lowerName = iconName.toLowerCase();
    
    for (const std of standardIcons) {
      if (lowerName !== std && (lowerName.includes(std) || std.includes(lowerName))) {
        // Prevent duplicate clusters
        if (!registry.some(item => item.similar.includes(iconName))) {
          registry.push({
            primary: std,
            similar: [iconName],
            confidence: 0.85,
            action: 'MERGE_ALIAS'
          });
          await fs.writeFile(DUPLICATES_FILE, JSON.stringify(registry, null, 2));
          return;
        }
      }
    }
  }
}
