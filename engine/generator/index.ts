import fs from 'fs/promises';
import path from 'path';
import { AnalysisReport } from '../analyzer';
import { AiMotionProfile } from '../ai';

const OUTPUT_DIR = path.resolve(process.cwd(), 'src/icons');

export class Generator {
  /**
   * Translates the AI's parameter choices into dynamic, GPU-accelerated CSS keyframes.
   */
  private static compileAiCss(profile: AiMotionProfile, iconName: string): string {
    const keyframesName = `motion-ai-${iconName}`;
    const idleKeyframesName = `motion-ai-idle-${iconName}`;
    
    // Dynamic Hover Keyframes
    let hoverTransform0 = 'transform: ';
    let hoverTransform50 = 'transform: ';
    let hoverTransform100 = 'transform: ';
    
    const h = profile.hoverAnimation;
    const r = h.rotation;
    const s = h.scale;
    const t = h.translate;
    const sk = h.skew;

    hoverTransform0 += 'scale(1) rotate(0deg) translate(0, 0) skew(0deg);';
    
    // Antagonistic/Spring wave points
    const scaleFactor = s ? s[0] : 1.0;
    const rotDeg = r ? r[0] : 0;
    const transX = t ? t[0] : 0;
    const transY = t ? t[1] : 0;
    const skewDeg = sk ? sk[0] : 0;

    hoverTransform50 += `scale(${scaleFactor * 1.08}) rotate(${rotDeg * 1.2}deg) translate(${transX * 1.5}px, ${transY * 1.5}px) skew(${skewDeg * 1.2}deg);`;
    hoverTransform100 += `scale(${s ? s[1] : 1.0}) rotate(${r ? r[1] : 0}deg) translate(${t ? t[0] : 0}px, ${t ? t[1] : 0}px) skew(${sk ? sk[0] : 0}deg);`;

    // Dynamic Idle Keyframes
    let idleTransform0 = 'transform: ';
    let idleTransform50 = 'transform: ';
    let idleTransform100 = 'transform: ';

    const id = profile.idleAnimation;
    idleTransform0 += 'scale(1) rotate(0deg) translate(0, 0);';
    idleTransform50 += `scale(${id.scale ? id.scale[1] : 1.0}) rotate(${id.rotation ? id.rotation[1] : 0}deg) translate(${id.translate ? id.translate[0] : 0}px, ${id.translate ? id.translate[1] : 0}px);`;
    idleTransform100 += 'scale(1) rotate(0deg) translate(0, 0);';

    return `
@keyframes ${keyframesName} {
  0% { ${hoverTransform0} }
  50% { ${hoverTransform50} }
  100% { ${hoverTransform100} }
}

@keyframes ${idleKeyframesName} {
  0% { ${idleTransform0} }
  50% { ${idleTransform50} }
  100% { ${idleTransform100} }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: ${keyframesName} ${h.duration}s ${h.easing} forwards;
}

.anim-${id.name} {
  animation: ${idleKeyframesName} ${id.duration}s ${id.easing} infinite alternate;
}
`;
  }

  /**
   * Generates all per-icon assets sequentially inside a isolated folder structure.
   */
  static async generate(
    analysis: AnalysisReport,
    profile: AiMotionProfile
  ): Promise<void> {
    const iconName = analysis.name;
    const pascalName = iconName.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const componentName = `${pascalName}Icon`;
    const folderPath = path.join(OUTPUT_DIR, iconName);
    
    await fs.mkdir(folderPath, { recursive: true });

    // 1. Parse raw inner SVG HTML content
    const innerMatch = analysis.normalizedSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const innerSvg = innerMatch ? innerMatch[1].trim() : '';

    // 2. Vue SFC File
    const customCss = this.compileAiCss(profile, iconName);
    const vueSfcContent = `
<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-${profile.motionType}']"
    :style="{ width: \`\${size}px\`, height: \`\${size}px\`, color: color || 'currentColor' }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-${profile.idleAnimation.name}"
    >
      ${innerSvg}
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ${iconName}
// Category: ${analysis.category}
// Physics Presets: ${profile.motionPhilosophy}

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 },
  color: { type: String, default: '' }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-${profile.idleAnimation.name} {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

${customCss.trim()}
</style>
`.trim();
    await fs.writeFile(path.join(folderPath, `${componentName}.vue`), vueSfcContent);

    // 3. Motion File
    const motionContent = `
export const ${pascalName}Motion = {
  idle: "${profile.idleAnimation.name}",
  hover: "${profile.hoverAnimation.name}",
  click: "${profile.clickAnimation.name}",
  duration: ${profile.hoverAnimation.duration},
  easing: "${profile.hoverAnimation.easing}"
};
`.trim();
    await fs.writeFile(path.join(folderPath, `${pascalName}.motion.ts`), motionContent);

    // 4. Physics File
    const physicsContent = `
export const ${pascalName}Physics = {
  tension: ${profile.physics.tension},
  friction: ${profile.physics.friction},
  mass: ${profile.physics.mass},
  damping: ${profile.physics.damping},
  stiffness: ${profile.physics.stiffness},
  elasticity: ${profile.physics.elasticity},
  inertia: ${profile.physics.inertia}
};
`.trim();
    await fs.writeFile(path.join(folderPath, `${pascalName}.physics.ts`), physicsContent);

    // 5. Shader File
    const shaderContent = `
export const ${pascalName}Shader = {
  name: "${profile.shader}",
  active: ${profile.shader !== 'none'}
};
`.trim();
    await fs.writeFile(path.join(folderPath, `${pascalName}.shader.ts`), shaderContent);

    // 6. Particles File
    const particlesContent = `
export const ${pascalName}Particles = {
  types: ${JSON.stringify(profile.particles)},
  active: ${profile.particles.length > 0}
};
`.trim();
    await fs.writeFile(path.join(folderPath, `${pascalName}.particles.ts`), particlesContent);

    // 7. JSON Profile
    await fs.writeFile(path.join(folderPath, `${pascalName}.ai.json`), JSON.stringify(profile, null, 2));

    // 8. Documentation File
    const docsContent = `
# ${pascalName} Icon

Dynamic dynamic animated asset part of the Universal Motion Engine powered by Ollama AI.

## AI Philosophy
> ${profile.motionPhilosophy}

## Semantic Details
- **Library**: ${analysis.library.toUpperCase()}
- **Category**: ${analysis.category}
- **Complexity**: ${analysis.geometry.complexity}

## Kinetic Profile
- **Idle Motion**: \`${profile.idleAnimation.name}\`
- **Interaction Style**: \`${profile.hoverAnimation.name}\`
- **Easing Model**: \`${profile.hoverAnimation.easing}\`
- **Shader Effect**: \`${profile.shader}\`
- **Particles**: ${profile.particles.join(', ') || 'none'}
`.trim();
    await fs.writeFile(path.join(folderPath, `${pascalName}.docs.md`), docsContent);
  }
}
