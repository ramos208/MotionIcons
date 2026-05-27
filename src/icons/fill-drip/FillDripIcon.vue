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
      <path d="M309.7 71.6l-64.4 64.4 33.4 33.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-33.4-33.4-96.4 96.4c-2.9 2.9-5.1 6.5-6.3 10.3l321.5 0 53.7-53.7c4.9-4.9 7.6-11.5 7.6-18.3s-2.7-13.5-7.6-18.3L346.3 71.6C341.5 66.7 334.9 64 328 64s-13.5 2.7-18.3 7.6zM58.3 232.4l96.4-96.4-49.4-49.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L200 90.7 264.4 26.3C281.3 9.5 304.1 0 328 0s46.7 9.5 63.6 26.3L517.7 152.4C534.5 169.3 544 192.1 544 216s-9.5 46.7-26.3 63.6L311.6 485.7C294.7 502.5 271.9 512 248 512s-46.7-9.5-63.6-26.3L58.3 359.6C41.5 342.7 32 319.9 32 296s9.5-46.7 26.3-63.6zM512 544c-35.3 0-64-28.7-64-64 0-25.2 32.6-79.6 51.2-108.7 6-9.4 19.5-9.4 25.5 0 18.7 29.1 51.2 83.5 51.2 108.7 0 35.3-28.7 64-64 64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fill-drip
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fill-drip (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fill-drip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fill-drip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fill-drip 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fill-drip 3s ease-in-out infinite alternate;
}
</style>