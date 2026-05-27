<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M.168 13.988c.272 1.623.86 3.115 1.69 4.423 3.095-.863 5.817-2.495 6.785-6.132 1.065-4.003-.15-8.199-3.057-10.422C1.626 4.364-.657 9.077.168 13.988m23.664-3.975c1.098 6.534-3.308 12.722-9.844 13.819-1.1.185-2.19.214-3.245.103a12.023 12.023 0 0 1-8.46-4.892l19.428-5.57c.279-.08.207-.349-.024-.333l-8.145.569c1.148-1.108 2.021-2.467 1.915-4.345-.214-3.043-3.311-6.013-9.071-7.967a12.016 12.016 0 0 1 6.87-1.333c5.228.548 9.663 4.512 10.576 9.95"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: turkishairlines
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for turkishairlines (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-turkishairlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-turkishairlines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-turkishairlines 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-turkishairlines 2s ease-in-out infinite alternate;
}
</style>