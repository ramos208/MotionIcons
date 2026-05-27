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
      <path d="M176 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 38.1-63-63c-9.4-9.4-24.6-9.4-33.9 0S21.7 55.6 31 65l63 63-38.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0c13.3 0 24-10.7 24-24l0-96zm0 400l0-96c0-13.3-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l38.1 0-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63 0 38.1c0 13.3 10.7 24 24 24s24-10.7 24-24zm312 24c13.3 0 24-10.7 24-24l0-38.1 63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63 38.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24zM464 56l0 96c0 13.3 10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-38.1 0 63-63c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63 0-38.1c0-13.3-10.7-24-24-24s-24 10.7-24 24zM320 120c-57.3 0-99.4 34-125.6 64.3-20 23.1-32.4 45.8-37.6 56.1-2.5 5-4.9 9.7-4.9 15.6s2.3 10.6 4.9 15.6c5.2 10.3 17.6 33 37.6 56.1 26.2 30.3 68.2 64.3 125.6 64.3s99.4-34 125.6-64.3c20-23.1 32.4-45.8 37.6-56.1 2.5-5 4.9-9.7 4.9-15.6s-2.3-10.6-4.9-15.6c-5.2-10.3-17.6-33-37.6-56.1-26.2-30.3-68.2-64.3-125.6-64.3zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrows-to-eye
// Category: search
// Physics Presets: Dynamic kinetic adaptation for arrows-to-eye (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrows-to-eye {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrows-to-eye {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrows-to-eye 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrows-to-eye 3s ease-in-out infinite alternate;
}
</style>