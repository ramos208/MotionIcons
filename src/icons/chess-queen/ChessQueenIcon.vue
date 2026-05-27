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
      <path d="M256 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM5.5 185L128 384 71.8 454.3c-5 6.3-7.8 14.1-7.8 22.2 0 19.6 15.9 35.5 35.5 35.5l312.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2L384 384 506.5 185c3.6-5.9 5.5-12.7 5.5-19.6l0-.6c0-20.3-16.5-36.8-36.8-36.8-7.3 0-14.4 2.2-20.4 6.2l-16.9 11.3c-12.7 8.5-29.6 6.8-40.4-4l-34.1-34.1C356.1 100.1 346.2 96 336 96s-20.1 4.1-27.3 11.3l-30.1 30.1c-12.5 12.5-32.8 12.5-45.3 0l-30.1-30.1C196.1 100.1 186.2 96 176 96s-20.1 4.1-27.3 11.3l-34.1 34.1c-10.8 10.8-27.7 12.5-40.4 4L57.3 134.2c-6.1-4-13.2-6.2-20.4-6.2-20.3 0-36.8 16.5-36.8 36.8l0 .6c0 6.9 1.9 13.7 5.5 19.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chess-queen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chess-queen (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chess-queen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chess-queen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chess-queen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chess-queen 3s ease-in-out infinite alternate;
}
</style>