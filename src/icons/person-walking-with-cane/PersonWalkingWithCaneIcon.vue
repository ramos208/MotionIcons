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
      <path d="M224-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM160 205.3l-22.6 22.6c-6 6-9.4 14.1-9.4 22.6l0 37.5c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-37.5c0-25.5 10.1-49.9 28.1-67.9l34.4-34.4c23.2-23.2 54.6-36.2 87.3-36.2 36.1 0 70.3 15.8 93.8 43.1l68.6 80c11.5 13.4 9.9 33.6-3.5 45.1s-33.6 9.9-45.1-3.5l-55.7-65 0 118.6 34.5 29.6c17.7 15.2 29.3 36.2 32.6 59.3l12.6 88.1c2.5 17.5-9.7 33.7-27.2 36.2s-33.7-9.7-36.2-27.2l-12.6-88.1c-1.1-7.7-5-14.7-10.9-19.8l-71.4-61.2c-21.3-18.2-33.5-44.9-33.5-72.9l0-69.3zm.1 165.8c2.4 2.3 4.8 4.6 7.4 6.8l46 39.4-2.2 7.6c-4.5 15.7-12.9 30-24.4 41.5l-68.3 68.3c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l68.3-68.3c3.8-3.8 6.6-8.6 8.1-13.8L160.1 371zm233.5-62.2c10.6-8 25.6-5.8 33.6 4.8l144 192c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8l-144-192c-8-10.6-5.8-25.6 4.8-33.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-walking-with-cane
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-walking-with-cane (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-walking-with-cane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-walking-with-cane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-walking-with-cane 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-walking-with-cane 3s ease-in-out infinite alternate;
}
</style>