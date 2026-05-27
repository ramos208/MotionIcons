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
      <path d="M160.5 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm-72 480l0-80-17.8 0c-10.9 0-18.6-10.7-15.2-21.1L86.7 285.5 58 323.3c-10.7 14.1-30.8 16.8-44.8 6.2S-3.7 298.7 7 284.7L65.9 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47L314 284.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8 31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1l-17.8 0 0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80-16 0 0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32zM480.5 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm-8 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-179.5-12.9 20.5c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9l12.3 0c33 0 63.7 16.9 81.2 44.9L619.6 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-12.9-20.5 0 179.5c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-16 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: children
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for children (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-children {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-children {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-children 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-children 3s ease-in-out infinite alternate;
}
</style>