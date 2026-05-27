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
      <path d="M448 0c-68.6 0-127.1 43.1-149.8 103.8 17.1 14.1 29.6 33.5 34.9 55.8 39.9 21.7 66.9 63.9 66.9 112.5 0 13.5-2.1 26.5-5.9 38.7 16.9 6 35 9.3 53.9 9.3 43 0 82.1-17 110.8-44.6 4.6-4.4 5.9-11.2 3.3-17s-8.6-9.3-14.9-8.8c-3 .2-6.1 .4-9.2 .4-63.5 0-115-51.5-115-115 0-45.1 26-84.2 63.8-103 5.7-2.8 9-8.9 8.2-15.2S489.6 5.3 483.4 3.9C472 1.4 460.2 0 448 0zM272 352c44.2 0 80-35.8 80-80 0-39-27.9-71.5-64.8-78.6 .5-3.1 .8-6.2 .8-9.4 0-30.9-25.1-56-56-56-12.4 0-23.9 4-33.1 10.8-13.4-25.5-40.1-42.8-70.9-42.8-44.2 0-80 35.8-80 80 0 7.4 1 14.6 2.9 21.5-29.8 11.6-50.9 40.6-50.9 74.5 0 44.2 35.8 80 80 80l192 0zM69 401.1c-12.6-4.2-26.2 2.6-30.4 15.2L17.2 480.4C13 493 19.8 506.6 32.4 510.8s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4zm120 0c-12.6-4.2-26.2 2.6-30.4 15.2l-21.4 64.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4zm120 0c-12.6-4.2-26.2 2.6-30.4 15.2l-21.4 64.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-moon-rain
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-moon-rain (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-moon-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-moon-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-moon-rain 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-moon-rain 3s ease-in-out infinite alternate;
}
</style>