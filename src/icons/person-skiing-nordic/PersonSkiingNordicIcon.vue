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
      <path d="M424.8 16a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm99.8 193.7c7.6 15.2 1.9 33.6-12.6 42l0 180.3-32 0 0-164.2-10.1 5c-27.4 13.7-60.7 6.1-79.4-18.2l-19.6-25.5-39.5 68.8 24.8 12.4c29.5 14.7 42.9 49.5 31.1 80.2l-28.2 73.4 149.4 0c7.9 0 15.6-2.3 22.2-6.7l7.9-5.3c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-7.9 5.3C543 506.9 526 512 508.6 512l-189.1 0c-.5 0-1 0-1.5 0L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l88 0c0-8.2 3.1-16.4 9.4-22.6l74.1-74.1 10.2-35.9c11.3 18.3 27.7 33.8 48.4 44.2l4.8 2.4-1.9 6.8c-3 10.5-8.6 20-16.3 27.7l-51.5 51.5 101.3 0 37.1-96.4-55.6-27.8C230.4 319 215.3 267 239.3 227.1l37.7-62.7-27.7-7.7c-9-2.5-18.1 3.2-20 12.3l-5.9 29.3c-3.1 15.6-17.1 26.3-32.5 25.7l-130 208-37.7 0 140.6-225c-3.4-6.3-4.6-13.8-3.1-21.3l5.9-29.3c9.1-45.6 55.1-73.8 99.9-61.4l32.5 9c46.7 13 88 40.8 117.6 79.3l24.9 32.3 40.4-20.2c15.8-7.9 35-1.5 42.9 14.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-skiing-nordic
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-skiing-nordic (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-skiing-nordic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-skiing-nordic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-skiing-nordic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-skiing-nordic 3s ease-in-out infinite alternate;
}
</style>