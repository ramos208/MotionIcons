<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
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
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M205.67,189.66a14.61,14.61,0,0,0,0,20.68,8,8,0,0,1-11.32,11.32,30.64,30.64,0,0,1,0-43.32l9.38-9.37A14.63,14.63,0,0,0,183,148.28L116.28,215A30.63,30.63,0,0,1,73,171.72L171.72,73A14.63,14.63,0,0,0,151,52.28L84.28,119A30.63,30.63,0,0,1,41,75.72L82.34,34.34A8,8,0,0,1,93.65,45.66L52.27,87A14.63,14.63,0,0,0,73,107.72L139.72,41A30.63,30.63,0,0,1,183,84.28L84.28,183A14.63,14.63,0,0,0,105,203.72L171.72,137A30.63,30.63,0,0,1,215,180.28Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scribble
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scribble (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-scribble {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scribble {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scribble 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scribble 3s ease-in-out infinite alternate;
}
</style>