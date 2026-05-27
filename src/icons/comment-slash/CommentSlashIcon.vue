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
      <path d="M41-25C31.6-34.3 16.4-34.3 7-25S-2.3-.4 7 9L535 537c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.6-96.6c44.4-43.2 71.6-101.8 71.6-166.5 0-132.5-114.6-240-256-240-63 0-120.8 21.4-165.4 56.8L41-25zm19.4 155C42.2 163 32 200.3 32 239.9 32 294.2 51.2 344.2 83.6 384.4L34.8 476.7c-4.8 9-3.3 20 3.6 27.5S56.1 514 65.5 510l118.4-50.7c31.8 13.3 67.1 20.7 104.1 20.7 36.4 0 70.9-7.1 102.3-19.9L60.3 130.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: comment-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for comment-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-comment-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-comment-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-comment-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-comment-slash 3s ease-in-out infinite alternate;
}
</style>