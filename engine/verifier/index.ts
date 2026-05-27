import fs from 'fs/promises';
import path from 'path';

export interface AuditReport {
  lucide: { expected: number; downloaded: number; verified: boolean };
  heroicons: { expected: number; downloaded: number; verified: boolean };
  iconoir: { expected: number; downloaded: number; verified: boolean };
  tabler: { expected: number; downloaded: number; verified: boolean };
  phosphor: { expected: number; downloaded: number; verified: boolean };
  hugeicons: { expected: number; downloaded: number; verified: boolean };
  fontawesome: { expected: number; downloaded: number; verified: boolean };
  simpleicons: { expected: number; downloaded: number; verified: boolean };
}

export class Verifier {
  /**
   * Performs automated audit across the active dataset to verify integrity.
   */
  static async auditDataset(processedCounts: Record<string, number>, expected: Record<string, number>): Promise<AuditReport> {
    const report: Partial<AuditReport> = {};

    for (const lib of Object.keys(expected)) {
      const downloaded = processedCounts[lib] || 0;
      report[lib as keyof AuditReport] = {
        expected: expected[lib],
        downloaded,
        verified: downloaded === expected[lib]
      };
    }

    return report as AuditReport;
  }

  /**
   * Verifies if all necessary assets exist for a compiled icon.
   */
  static async verifyIconOutput(folderPath: string, pascalName: string): Promise<boolean> {
    const requiredFiles = [
      `${pascalName}Icon.vue`,
      `${pascalName}.motion.ts`,
      `${pascalName}.physics.ts`,
      `${pascalName}.shader.ts`,
      `${pascalName}.particles.ts`,
      `${pascalName}.ai.json`,
      `${pascalName}.docs.md`
    ];

    for (const file of requiredFiles) {
      try {
        await fs.access(path.join(folderPath, file));
      } catch {
        return false;
      }
    }
    return true;
  }
}
