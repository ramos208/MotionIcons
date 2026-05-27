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
      <path d="M320.5 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96c-53 0-96 43-96 96 0 41.8 26.7 77.4 64 90.5l0 257.9c-62.9-14.3-110.2-69.7-111.9-136.5l16.1 14.1c10 8.7 25.1 7.7 33.9-2.3s7.7-25.1-2.3-33.9l-64-56c-9-7.9-22.6-7.9-31.6 0l-64 56c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l16.2-14.2c2.1 113.1 94.4 204.1 208 204.1 16.6 0 32.7-1.9 48.2-5.6-20.3-30.5-32.2-67-32.2-106.4 0-27.3 5.7-53.3 16-76.9l0-136.6c37.3-13.2 64-48.7 64-90.5 0-53-43-96-96-96zm208 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7l-36.7 36.7 36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-36.7-36.7-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: anchor-circle-xmark
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for anchor-circle-xmark (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-anchor-circle-xmark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-anchor-circle-xmark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-anchor-circle-xmark 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-anchor-circle-xmark 3s ease-in-out infinite alternate;
}
</style>