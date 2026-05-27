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
      <path d="M320.5 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96c-53 0-96 43-96 96 0 41.8 26.7 77.4 64 90.5l0 257.9c-62.9-14.3-110.2-69.7-111.9-136.5l16.1 14.1c10 8.7 25.1 7.7 33.9-2.3s7.7-25.1-2.3-33.9l-64-56c-9-7.9-22.6-7.9-31.6 0l-64 56c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l16.2-14.2c2.1 113.1 94.4 204.1 208 204.1 28.3 0 55.4-5.7 80-15.9l0-.2 0-72.2c-14.4 9.6-30.6 16.7-48 20.7l0-257.9c37.3-13.2 64-48.7 64-90.5 0-53-43-96-96-96zm272 304.1l0 47.9-64 0 0-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32zM416.5 400l0 96c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-96c0-20.9-13.4-38.7-32-45.3l0-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 50.6c-18.6 6.6-32 24.4-32 45.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: anchor-lock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for anchor-lock (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-anchor-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-anchor-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-anchor-lock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-anchor-lock 3s ease-in-out infinite alternate;
}
</style>