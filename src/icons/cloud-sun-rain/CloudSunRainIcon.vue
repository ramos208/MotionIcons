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
      <path d="M254.9 448.2c4.2-12.6 17.8-19.4 30.3-15.2 12.6 4.2 19.4 17.8 15.2 30.4l-21.4 64.1c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.3l21.4-64.2zm120 0c4.2-12.6 17.8-19.4 30.3-15.2 12.6 4.2 19.4 17.8 15.2 30.4l-21.4 64.1c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.3l21.4-64.2zm120 0c4.2-12.6 17.8-19.4 30.3-15.2 12.6 4.2 19.4 17.8 15.2 30.4l-21.4 64.1c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.3l21.4-64.2zM448.3 128c44.2 0 80 35.8 80 80 0 7.5-1.1 14.7-3 21.5 29.8 11.6 51 40.6 51 74.5 0 44.2-35.8 80-80 80l-192 0-8.2-.4c-40.3-4.1-71.8-38.2-71.8-79.6 0-39 27.9-71.5 64.9-78.5-.5-3.1-.9-6.2-.9-9.5 0-30.9 25.1-56 56-56 12.4 0 23.9 4.1 33.2 10.9 13.4-25.5 40.1-42.9 70.8-42.9zM240.3-31.8c5.3 0 10.3 2.7 13.3 7.1l47.3 70.4 83.3-16.3c5.2-1 10.6 .7 14.3 4.4 3.8 3.8 5.4 9.2 4.4 14.4l-8.6 43.8c-11.9 5.5-22.8 12.9-32.4 21.6-5.7-1-11.7-1.5-17.7-1.5-14.3 0-28 3-40.4 8.2-16.9-15-39.2-24.2-63.6-24.2-53 0-96 43-96 96 0 30.9 14.6 58.2 37.2 75.8-3.4 11.5-5.2 23.6-5.2 36.2 0 13.2 2 25.9 5.7 37.9l-2.4-3.5-83.2 16.3c-5.2 1-10.6-.7-14.3-4.4-3.8-3.8-5.4-9.2-4.4-14.4l16.3-83.3-70.4-47.4c-4.4-3-7.1-8-7.1-13.3 0-5.3 2.6-10.3 7-13.2l70.4-47.4-16.3-83.2-.2-2c-.3-4.6 1.3-9.1 4.6-12.4 3.8-3.8 9.2-5.4 14.4-4.4l83.2 16.3 47.3-70.4 1.2-1.6c3-3.5 7.4-5.5 12.1-5.5zm0 175.8c8.6 0 16.6 2.3 23.6 6.2-9.7 11.9-16.9 25.9-20.7 41.3-15 8.1-28.2 19.2-38.8 32.3-7.5-8.5-12.2-19.6-12.2-31.8 0-26.5 21.5-48 48-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-sun-rain
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-sun-rain (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-sun-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-sun-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-sun-rain 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-sun-rain 3s ease-in-out infinite alternate;
}
</style>