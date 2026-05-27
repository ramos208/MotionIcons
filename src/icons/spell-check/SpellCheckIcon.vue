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
      <path d="M120 32c-48.6 0-88 39.4-88 88l0 168c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-168c0-48.6-39.4-88-88-88l-16 0zm40 128l-64 0 0-40c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 40zM304 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l72 0c48.6 0 88-39.4 88-88 0-23.6-9.3-45-24.4-60.8 10.3-14.4 16.4-32.1 16.4-51.2 0-48.6-39.4-88-88-88l-64 0zm64 112l-32 0 0-48 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zM336 256l0-48 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0zm233 84c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-105.7 132.1-38.7-38.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.4 6.4 15.3 9.8 24.4 9.3s17.5-4.9 23.2-12L569 340z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spell-check
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spell-check (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spell-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spell-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spell-check 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spell-check 3s ease-in-out infinite alternate;
}
</style>