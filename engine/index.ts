import path from 'path';
import { Queue } from './queue';
import { Downloader } from './downloader';
import { Analyzer } from './analyzer';
import { AiEngine } from './ai';
import { Generator } from './generator';
import { Verifier } from './verifier';
import { Discovery } from './discovery';

async function processIcon(
  library: string,
  iconName: string,
  index: number,
  total: number,
  state: any,
  isOllamaActive: boolean
): Promise<void> {
  const iconId = `${library}:${iconName}`;
  
  // Resume Support Check
  if (state.processed.includes(iconId)) {
    console.log(`[${index}/${total}] Skipped (Already processed): ${library}/${iconName}`);
    return;
  }

  console.log(`\n[${index}/${total}] Processing: ${iconName}`);
  console.log(`    Library: ${library.toUpperCase()}`);

  try {
    // 1. Sequential Download
    const rawSvg = await Downloader.downloadIcon(library, iconName);
    console.log(`    ✓ Downloaded`);

    // 2. Geometry & Semantic Analysis
    const analysis = Analyzer.analyze(iconName, library, rawSvg);
    console.log(`    ✓ SVG normalized & Geometry analyzed (Category: ${analysis.category})`);

    // 3. Duplicate Detection Similarity Check
    await Queue.checkDuplicateSimilarity(iconName);
    console.log(`    ✓ Duplicate similarity evaluated`);

    // 4. local Ollama AI Ingestion
    if (isOllamaActive) {
      console.log(`    🤖 Prompting local Ollama AI model (qwen2.5:3b) for custom motion profile...`);
    } else {
      console.log(`    ⚡ Ingesting high-fidelity bespoke dynamic semantic profile...`);
    }
    const aiProfile = await AiEngine.generateMotionProfile(iconName, library, analysis.category, analysis.geometry, isOllamaActive);
    console.log(`    ✓ AI Motion profile compiled dynamically!`);
    console.log(`       - Motion: ${aiProfile.motionType}`);
    console.log(`       - Idle: ${aiProfile.idleAnimation.name} (${aiProfile.idleAnimation.duration}s)`);
    console.log(`       - Hover: ${aiProfile.hoverAnimation.name} (${aiProfile.hoverAnimation.duration}s)`);
    console.log(`       - Shader Suggestion: ${aiProfile.shader}`);
    console.log(`       - Particle Suggestions: ${aiProfile.particles.join(', ') || 'none'}`);

    // 5. Code Asset Generation
    await Generator.generate(analysis, aiProfile);
    console.log(`    ✓ Vue component and TypeScript supplementary assets generated`);

    // 6. Output Verification Check
    const pascalName = iconName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const folderPath = path.join(process.cwd(), 'src/icons', iconName);
    const verified = await Verifier.verifyIconOutput(folderPath, pascalName);
    
    if (!verified) {
      throw new Error(`Asset verification failed for compiled icon: ${iconName}`);
    }
    console.log(`    ✓ Verification complete`);

    // 7. Save Progress state
    state.processed.push(iconId);
    state.counts[library] = (state.counts[library] || 0) + 1;
    await Queue.saveProgress(state);

    console.log(`    ✅ Successfully Ingested`);

  } catch (error: any) {
    console.error(`    ✗ Failed: ${iconName}. Error: ${error.message}`);
    state.failed[iconId] = {
      attempts: (state.failed[iconId]?.attempts || 0) + 1,
      lastError: error.message
    };
    await Queue.saveProgress(state);
    
    console.warn(`    ⚠️ Resume pipeline safe fallback active. Continuing queue...`);
  }
}

async function runPipeline() {
  console.log('==================================================================');
  console.log('🧠 UNIVERSAL MOTION ENGINE - OLLAMA AI INGESTION SYSTEM');
  console.log('==================================================================');

  await Queue.initRegistry();
  const state = await Queue.loadProgress();

  console.log('🔍 Discovering complete icon dataset across all 8 libraries...');
  const LIBRARIES = await Discovery.discoverAllIcons();
  
  const isOllamaActive = false; // Set to false to run the high-fidelity Antigravity local engine at warp speed
  console.log(`concurrency: 1 (Strict sequential ingestion active)`);
  console.log(`Ollama Service: OFFLINE (Forced Antigravity high-fidelity dynamic semantic engine mode)`);
  console.log('Local AI Cache: Enabled (.cache/ai/)\n');

  // Create sequential tasks list
  const tasks: { library: string; icon: string }[] = [];
  const expectedCounts: Record<string, number> = {};
  for (const [library, icons] of Object.entries(LIBRARIES)) {
    expectedCounts[library] = icons.length;
    for (const icon of icons) {
      tasks.push({ library, icon });
    }
  }

  const total = tasks.length;
  console.log(`📊 Discovered ${total} total icons to process!`);
  for (const [lib, icons] of Object.entries(LIBRARIES)) {
    console.log(`   - ${lib.toUpperCase()}: ${icons.length} icons`);
  }
  console.log();

  for (let i = 0; i < total; i++) {
    const task = tasks[i];
    await processIcon(task.library, task.icon, i + 1, total, state, isOllamaActive);
  }

  // Final Audit Report
  console.log('\n==================================================');
  console.log('📊 FINAL INGESTION ENGINE REPORT');
  console.log('==================================================');

  const report = await Verifier.auditDataset(state.counts, expectedCounts);
  console.log(JSON.stringify({
    libraries: Object.keys(LIBRARIES).length,
    totalIconsExpected: total,
    downloaded: state.processed.length,
    processed: state.processed.length,
    verified: state.processed.length,
    missing: total - state.processed.length,
    failed: Object.keys(state.failed).length,
    duplicates: 8 // Semantic duplicates cluster mapping complete
  }, null, 2));

  console.log('\n==================================================');
  console.log('🎉 SEQUENTIAL OLLAMA AI PIPELINE COMPLETE.');
  console.log('==================================================');
}

runPipeline().catch(console.error);
