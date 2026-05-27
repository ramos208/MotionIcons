<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M256.5 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240zM226.7 304l59.4 0 1.5 0c-12.9 26.8-7.8 58.2 11.5 79.5-20.2 22.3-24.8 55.8-9.4 83.4l22.5 40.4c.9 1.6 1.9 3.2 2.9 4.7l-237 0c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3zm205.9-56.4c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 6.1c0 18.9 24.1 32.8 40.5 23.4l5-2.9c11.6-6.7 26.5-2.6 33 9.1l22.4 40.2c6.2 11.2 2.6 25.2-8.2 32l-4.7 2.9c-16.2 10.1-16.2 39.9 0 50.1l4.6 2.9c10.8 6.8 14.5 20.8 8.3 32L607 483.8c-6.5 11.7-21.4 15.9-33 9.1l-4.9-2.9c-16.4-9.5-40.5 4.5-40.5 23.4l0 6.1c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-5.9c0-19-24.2-33-40.7-23.5l-4.8 2.8c-11.6 6.7-26.4 2.6-33-9.1l-22.6-40.4c-6.2-11.2-2.6-25.3 8.3-32.1l4.4-2.7c16.3-10.1 16.3-40.1 0-50.2l-4.5-2.8c-10.9-6.8-14.5-20.9-8.3-32.1l22.5-40.3c6.5-11.7 21.4-15.8 32.9-9.1l4.8 2.8c16.5 9.5 40.7-4.5 40.7-23.5l0-5.9zm99.9 136.2a52 52 0 1 0 -104 0 52 52 0 1 0 104 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-gear
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for user-gear (fontawesome). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-gear {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-gear {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-gear 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-gear 3s ease-in-out infinite alternate;
}
</style>