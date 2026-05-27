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
      <path d="M10.5 18.3002V5.81444C10.5 4.22713 10.0436 2.92085 8.11708 3.00374C6.50864 3.07294 5.00141 3.89684 3.80452 4.89375C1.66292 6.67753 1.72577 8.75973 2.46872 11.2023L4.85288 19.0408C5.20558 20.2004 6.33546 21 7.62123 21C9.21113 21 10.5 19.7913 10.5 18.3002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5 18.3002V5.81444C13.5 4.22713 13.9564 2.92085 15.8829 3.00374C17.4914 3.07294 18.9986 3.89684 20.1955 4.89375C22.3371 6.67753 22.2742 8.75973 21.5313 11.2023L19.1471 19.0408C18.7944 20.2004 17.6645 21 16.3788 21C14.7889 21 13.5 19.7913 13.5 18.3002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 13C3 12 3.7 9.3 6.5 8.5M6.5 8.5C9 9 10 10 10.5 10.5M6.5 8.5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 13C21 12 20.3 9.3 17.5 8.5M17.5 8.5C15 9 14 10 13.5 10.5M17.5 8.5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sandals
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sandals (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sandals {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sandals {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sandals 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sandals 3s ease-in-out infinite alternate;
}
</style>