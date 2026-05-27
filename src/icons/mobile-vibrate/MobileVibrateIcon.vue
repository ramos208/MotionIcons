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
      <path d="M384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-384c0-35.3 28.7-64 64-64L384 0zM248 416c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zM48.8 133.4c9.4-7.7 23.3-7.1 32.1 1.7 9.4 9.4 9.4 24.6 0 33.9l-31 31 25.4 25.4 2.9 3.2c6.3 7.7 9.8 17.4 9.8 27.4 0 11.5-4.6 22.5-12.7 30.6l-25.4 25.4 31 31 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7L47 377 12.7 342.6C5.6 335.5 1.2 326.2 .2 316.3L0 312 .2 307.7c1-9.9 5.4-19.2 12.5-26.3L38.1 256 12.7 230.6C5.6 223.5 1.2 214.2 .2 204.3L0 200 .2 195.7c1-9.9 5.4-19.2 12.5-26.3L47 135 48.8 133.4zM495 135c8.8-8.8 22.7-9.3 32.1-1.7l1.8 1.7 34.3 34.3c7.1 7.1 11.5 16.4 12.5 26.3l.2 4.3-.2 4.3c-1 9.9-5.4 19.2-12.5 26.3l-25.4 25.4 25.4 25.4c7.1 7.1 11.5 16.4 12.5 26.3l.2 4.3-.2 4.3c-1 9.9-5.4 19.2-12.5 26.3l-34.3 34.3-1.8 1.7c-9.4 7.7-23.3 7.1-32.1-1.7s-9.3-22.7-1.7-32.1l1.7-1.8 31-31-25.4-25.4c-8.1-8.1-12.7-19.1-12.7-30.6 0-10 3.5-19.7 9.8-27.4l2.9-3.2 25.4-25.4-31-31c-9.4-9.4-9.4-24.6 0-33.9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mobile-vibrate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mobile-vibrate (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mobile-vibrate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mobile-vibrate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mobile-vibrate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mobile-vibrate 3s ease-in-out infinite alternate;
}
</style>