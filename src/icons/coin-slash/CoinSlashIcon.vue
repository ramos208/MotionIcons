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
      <path d="M4.62323 5.24841C2.99408 7.02743 2 9.39765 2 12C2 17.5229 6.47715 22 12 22C14.5361 22 16.8517 21.0559 18.6146 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.3021 15.6775C21.7525 14.5392 22 13.2985 22 12C22 6.47715 17.5228 2 12 2C10.7687 2 9.58934 2.22255 8.5 2.62961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391C13.1141 16.431 14.1901 16.0554 14.6973 15.1933" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16.391V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 9.5C9.5 10.6811 10.3525 11.1647 11.3862 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872V5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: coin-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for coin-slash (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-coin-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-coin-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-coin-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-coin-slash 3s ease-in-out infinite alternate;
}
</style>