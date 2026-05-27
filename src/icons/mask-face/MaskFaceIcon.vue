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
      <path d="M320 64c-27.2 0-53.8 8-76.4 23.1l-37.1 24.8c-15.8 10.5-34.3 16.1-53.3 16.1L64 128c-35.3 0-64 28.7-64 64l0 78.7c0 62.6 45.2 116 107 126.3l97.9 16.3c33 22 72.6 34.7 115.1 34.7s82.2-12.8 115.1-34.7L533 396.9c61.7-10.3 107-63.7 107-126.3l0-78.7c0-35.3-28.7-64-64-64l-89.2 0c-19 0-37.5-5.6-53.3-16.1L396.4 87.1C373.8 72 347.2 64 320 64zM135.9 336.9l-18.4-3.1C86.6 328.7 64 302 64 270.7l0-78.7 48 0 0 48c0 35 8.6 67.9 23.9 96.9zm386.6-3.1l-18.4 3.1C519.4 307.9 528 275 528 240l0-48 48 0 0 78.7c0 31.3-22.6 58-53.5 63.1zM192 232c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zm56 56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mask-face
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mask-face (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mask-face {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mask-face {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mask-face 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mask-face 3s ease-in-out infinite alternate;
}
</style>