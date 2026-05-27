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
      <path d="M368 32c61.9 0 112 50.1 112 112l0 26.8c14.5-6.9 30.8-10.8 48-10.8 61.9 0 112 50.1 112 112S589.9 384 528 384l-48 0 0 32c0 16.6 12.6 30.2 28.7 31.8l6.6 .3c16.1 1.6 28.7 15.3 28.7 31.8 0 17.7-14.3 32-32 32-53 0-96-43-96-96l0-32-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 304c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-304c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 304c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 94.2 32 80.6 32 64 32 46.3 46.3 32 64 32 91 32 115.3 43.1 132.7 61 152.6 43 179 32 208 32 239.3 32 267.7 44.9 288 65.7 308.3 44.9 336.6 32 368 32zM528 224c-26.5 0-48 21.5-48 48l0 48 48 0c26.5 0 48-21.5 48-48s-21.5-48-48-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: virgo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for virgo (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-virgo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-virgo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-virgo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-virgo 3s ease-in-out infinite alternate;
}
</style>