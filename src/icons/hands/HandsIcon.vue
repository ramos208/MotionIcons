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
      <path d="M512 160l-.1 72.6c0 44.8-17.6 87.1-47.9 118.4-.3-77-40.1-148.4-105.4-189.3l-1.9-1.2c2.5-3.7 2.8-8.6 .4-12.7l-62-107.4c-6.6-11.5-2.7-26.2 8.8-32.8S330 5 336.6 16.5l68 117.8 0 0 0 0 43.3 75 .1-49.3c0-17.7 14.4-32 32-32s32 14.4 32 32zM298.4 124.2c-14.1-8.8-29.8-12.7-45.2-12.1L216.7 48.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l67.1 116.2-27-16.9zM211.9 88.5l16.4 28.4c-15.1 5.5-28.6 15.6-38.3 29.7l-19.7-34.2c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zm-46.4 63.7l12.5 21.7c-2 8.6-2.5 17.5-1.7 26.1l-4.3 0 0 0-34.4 0-13.7-23.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zM228.9 175c9.4-15 29.1-19.5 44.1-10.2l60.2 37.6C384.7 234.7 416 291.2 416 352l0 8c0 83.9-68.1 152-152 152L88 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l92 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L56 440c-13.3 0-24-10.7-24-24s10.7-24 24-24l124 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L24 368c-13.3 0-24-10.7-24-24s10.7-24 24-24l156 0c6.6 0 12-5.4 12-12s-5.4-12-12-12L56 296c-13.3 0-24-10.7-24-24s10.7-24 24-24l136 0 0 0 0 0 93.2 0-46.2-28.9c-15-9.4-19.5-29.1-10.2-44.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hands
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hands (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hands {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hands {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hands 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hands 3s ease-in-out infinite alternate;
}
</style>