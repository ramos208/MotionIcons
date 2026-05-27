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
      <path d="M232 0c-22.1 0-40 17.9-40 40l0 164.2c-8.5-7.6-19.7-12.2-32-12.2-26.5 0-48 21.5-48 48l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-55.7c-2 1.4-3.9 3-5.8 4.5L55 284.8C40.4 297 32 315 32 334L32 372c0 38 16.9 74 46.1 98.3l5.4 4.5c28.8 24 65 37.1 102.4 37.1L304 512c70.7 0 128-57.3 128-128l0-96c0-26.5-21.5-48-48-48-12.4 0-23.6 4.7-32.1 12.3-1.9-24.8-22.6-44.3-47.9-44.3-12.3 0-23.5 4.6-32 12.2L272 40c0-22.1-17.9-40-40-40z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-middle-finger
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-middle-finger (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-middle-finger {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-middle-finger {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-middle-finger 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-middle-finger 3s ease-in-out infinite alternate;
}
</style>