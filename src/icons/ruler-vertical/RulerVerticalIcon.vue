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
      <path d="M0 16C0-10.5 21.5-32 48-32l160 0c26.5 0 48 21.5 48 48l0 24-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 24c0 26.5-21.5 48-48 48L48 544c-26.5 0-48-21.5-48-48L0 16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ruler-vertical
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ruler-vertical (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ruler-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ruler-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ruler-vertical 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ruler-vertical 3s ease-in-out infinite alternate;
}
</style>