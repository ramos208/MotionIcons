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
      <path d="M557 96.7c14.4 14.4 12.4 38.4-4.3 50.2l-64.6 45.7c-43.7 30.9-79.2 71.9-103.4 119.6l-25.3 49.8c-25.1 49.3-62.1 91.5-107.8 122.6l-74.1 50.6c-13.1 8.9-30.7 7.3-41.8-3.9l-44.9-44.9 86.5-66.5c42.3-32.5 76.7-74.3 100.6-122l24.5-49.1c24.5-49 61.8-90.6 107.9-120.2l108.7-69.9 38 38zM484.2 23.9L384.3 88.2c-53.4 34.3-96.5 82.4-124.9 139.1l-24.5 49.1c-20.6 41.3-50.3 77.3-86.9 105.4l-91.4 70.3-36.9-36.9c-14.4-14.4-12.4-38.4 4.3-50.2l64.6-45.7c43.7-30.9 79.2-71.9 103.4-119.6l25.3-49.8C242.3 100.8 279.3 58.6 325 27.4l74.1-50.6c13.1-8.9 30.6-7.3 41.8 3.9l43.3 43.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bacon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bacon (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bacon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bacon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bacon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bacon 3s ease-in-out infinite alternate;
}
</style>