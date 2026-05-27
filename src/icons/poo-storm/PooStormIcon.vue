<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M268.9-31.8c-5.5-.7-11 1.4-14.5 5.7s-4.6 10.1-2.8 15.3c2.8 8.2 4.3 16.9 4.3 26.1 0 21.7-8.5 37.2-21.9 47.6-13.9 10.8-34.1 17-58.1 17l-24 0c-48.6 0-88 39.4-88 88 0 14.8 3.7 28.8 10.2 41.1-42 6.6-74.2 43-74.2 86.9 0 46.6 36.2 84.7 81.9 87.8 3.1-12.4 9.9-23.8 19.6-32.5L242.7 225c12.2-10.9 28-17 44.4-17 44.6 0 76.5 43 63.7 85.7l-12.7 42.4c28.8 1.2 52.7 21.1 59.8 47.9l26.2 0c48.6 0 88-39.4 88-88 0-43.9-32.1-80.3-74.2-86.9 6.5-12.3 10.2-26.2 10.2-41.1 0-48.6-39.4-88-88-88l-9.4 0c.9-5.4 1.4-10.9 1.4-16.6 0-48.7-36.1-88.9-83.1-95.2zM144.6 416l61.8 0-31.2 104.1c-3.6 11.9 5.3 23.9 17.8 23.9 4.6 0 9-1.7 12.4-4.7L346.5 412.9c3.5-3.1 5.5-7.6 5.5-12.4 0-9.2-7.4-16.6-16.6-16.6l-61.8 0 31.2-104.1c3.6-11.9-5.3-23.9-17.8-23.9-4.6 0-9 1.7-12.4 4.7L133.5 387.1c-3.5 3.1-5.5 7.6-5.5 12.4 0 9.2 7.4 16.6 16.6 16.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: poo-storm
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for poo-storm (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-poo-storm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-poo-storm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-poo-storm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-poo-storm 3s ease-in-out infinite alternate;
}
</style>