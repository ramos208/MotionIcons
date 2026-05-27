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
      <path d="M160 79l0 81-44.8 33.6C103.1 202.7 96 216.9 96 232l0 40-60.6 30.3C13.7 313.2 0 335.3 0 359.6L0 448c0 35.3 28.7 64 64 64 74.7 0 85.4 0 320 0l64 0c35.3 0 64-28.7 64-64l0-88.4c0-24.2-13.7-46.4-35.4-57.2L416 272 416 232c0-15.1-7.1-29.3-19.2-38.4L352 160 352 79c0-9.5-4.2-18.5-11.5-24.6L271.4-3.2c-8.9-7.4-21.8-7.4-30.7 0L171.5 54.4C164.2 60.5 160 69.5 160 79zm96 241c35.3 0 64 28.7 64 64l0 80-128 0 0-80c0-35.3 28.7-64 64-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: place-of-worship
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for place-of-worship (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-place-of-worship {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-place-of-worship {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-place-of-worship 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-place-of-worship 3s ease-in-out infinite alternate;
}
</style>