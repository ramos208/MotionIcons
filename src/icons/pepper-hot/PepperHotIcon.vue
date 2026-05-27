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
      <path d="M545 65c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L478.9 63.2C452.3 43.6 419.5 32 384 32 348.9 32 316.5 43.3 290.1 62.4 274.1 74.1 284.2 96 304 96l24 0c13.3 0 24 10.7 24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24 10.7 24 24l0 24c0 19.8 21.9 29.9 33.6 13.9 19.1-26.4 30.4-58.8 30.4-93.9 0-35.5-11.6-68.3-31.2-94.9L545 65zM270 135.5l-159.6 228C101.3 376.4 86.7 384 71 384l-7 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l27.1 0c65.7 0 129.7-20.2 183.5-57.8L440.5 306.1C435 295.9 432 284.2 432 272l-56 0c-39.8 0-72-32.2-72-72l0-56c-12.2 0-23.9-3-34-8.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pepper-hot
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pepper-hot (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pepper-hot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pepper-hot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pepper-hot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pepper-hot 3s ease-in-out infinite alternate;
}
</style>