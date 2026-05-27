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
      <path d="M208 0l80 0 0 56c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-56 80 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-108.8 0c8.2-14.1 12.8-30.5 12.8-48l0-160c10-13.4 16-30 16-48l0-32c0-44.2-35.8-80-80-80l-176 0 0-96c0-26.5 21.5-48 48-48zM32 336l320 0 0 128c0 26.5-21.5 48-48 48L80 512c-26.5 0-48-21.5-48-48l0-128zM48 192l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: boxes-packing
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for boxes-packing (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-boxes-packing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-boxes-packing {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-boxes-packing 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-boxes-packing 3s ease-in-out infinite alternate;
}
</style>