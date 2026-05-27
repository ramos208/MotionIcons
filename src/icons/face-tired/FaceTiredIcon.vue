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
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM164.7 328.7c22-22 53.9-40.7 91.3-40.7s69.3 18.7 91.3 40.7c11.1 11.1 20.1 23.4 26.4 35.4 6.2 11.7 10.3 24.4 10.3 35.9 0 5.2-2.6 10.2-6.9 13.2s-9.8 3.7-14.7 1.8l-20.5-7.7c-26.9-10.1-55.5-15.3-84.3-15.3l-3.2 0c-28.8 0-57.3 5.2-84.3 15.3L149.6 415c-4.9 1.8-10.4 1.2-14.7-1.8S128 405.2 128 400c0-11.6 4.2-24.2 10.3-35.9 6.3-12 15.3-24.3 26.4-35.4zM122.6 159.2c4.5-6.8 13.3-9.2 20.6-5.5l79.6 40c5.4 2.7 8.8 8.2 8.8 14.3s-3.4 11.6-8.8 14.3l-79.6 40c-7.3 3.6-16.1 1.3-20.6-5.5s-3.1-15.9 3.1-21.1L159 208 125.8 180.3c-6.2-5.2-7.6-14.3-3.1-21.1zm263.6 21.1L353 208 386.2 235.7c6.2 5.2 7.6 14.3 3.1 21.1s-13.3 9.2-20.6 5.5l-79.6-40c-5.4-2.7-8.8-8.2-8.8-14.3s3.4-11.6 8.8-14.3l79.6-40c7.3-3.6 16.1-1.3 20.6 5.5s3.1 15.9-3.1 21.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-tired
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-tired (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-tired {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-tired {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-tired 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-tired 3s ease-in-out infinite alternate;
}
</style>