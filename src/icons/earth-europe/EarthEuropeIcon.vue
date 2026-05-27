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
      <path d="M256.2 48c114.8 .1 207.8 93.2 207.8 208 0 22.1-3.4 43.4-9.8 63.4-2 .4-4.1 .6-6.2 .6l-2.7 0c-8.5 0-16.6-3.4-22.6-9.4l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6l0-50.7c0-8.8 7.2-16 16-16s16-7.2 16-16-7.2-16-16-16l-24 0c-13.3 0-24 10.7-24 24s-10.7 24-24 24l-56 0c-8.8 0-16 7.2-16 16s-7.2 16-16 16l-25.4 0c-12.5 0-22.6-10.1-22.6-22.6 0-6 2.4-11.8 6.6-16l70.1-70.1c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3l-14.1 0c-12.5 0-22.6-10.1-22.6-22.6 0-6 2.4-11.8 6.6-16l23.1-23.1c.8-.8 1.6-1.5 2.5-2.2zM438.4 356.1c-32.8 59.6-93.9 101.4-165.2 107.2-.7-2.3-1.1-4.8-1.1-7.3 0-13.3-10.7-24-24-24l-26.7 0c-8.5 0-16.6-3.4-22.6-9.4l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6l0-66.7c0-17.7 14.3-32 32-32l98.7 0c8.5 0 16.6 3.4 22.6 9.4l29.3 29.3c6 6 14.1 9.4 22.6 9.4l5.5 0c8.5 0 16.6 3.4 22.6 9.4l16 16c4.2 4.2 10 6.6 16 6.6 4.8 0 9.3 1.5 13 4.1zM256 512l26.2-1.3c-8.6 .9-17.3 1.3-26.2 1.3zm26.2-1.3C411.3 497.6 512 388.6 512 256 512 114.6 397.4 0 256 0l0 0C114.6 0 0 114.6 0 256 0 383.5 93.2 489.3 215.3 508.8 228.5 510.9 242.1 512 256 512zM187.3 123.3l-32 32c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l32-32c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: earth-europe
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for earth-europe (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-earth-europe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-earth-europe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-earth-europe 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-earth-europe 3s ease-in-out infinite alternate;
}
</style>