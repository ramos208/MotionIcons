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
      <path d="M91.3 288l-34.8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l21.4 0C37.3 147.3 105.1 42 207.6 42l8.2 0c33.6 0 66.2 11.3 92.5 32.2l16.1 12.7c13.9 11 16.2 31.1 5.2 45s-31.1 16.2-45 5.2l-16.1-12.7c-15-11.9-33.6-18.4-52.8-18.4l-8.2 0c-57.3 0-94.7 59.9-69.7 111.4 3.6 7.4 6.6 14.9 9.1 22.6l149.5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-141.2 0c1 35.3-8.7 70.6-28.9 100.9l-18.1 27.1 212.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-272 0c-11.8 0-22.6-6.5-28.2-16.9s-5-23 1.6-32.9l51.2-76.8c13.1-19.6 19.2-42.6 18.2-65.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sterling-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sterling-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sterling-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sterling-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sterling-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sterling-sign 3s ease-in-out infinite alternate;
}
</style>