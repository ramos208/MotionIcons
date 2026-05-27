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
      <path d="M192 256a112 112 0 1 0 0 224 112 112 0 1 0 0-224zM16 368c0-86.3 62.1-158.1 144.1-173.1-.1-.9-.1-1.9-.1-2.9l0-16-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-61.4-28 22.4c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45l80-64c11.7-9.3 28.3-9.3 40 0l80 64c13.8 11 16 31.2 5 45s-31.2 16-45 5l-28-22.4 0 61.4 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 16c0 1 0 1.9-.1 2.9 82 15 144.1 86.8 144.1 173.1 0 97.2-78.8 176-176 176S16 465.2 16 368z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mars-stroke-up
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mars-stroke-up (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mars-stroke-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-mars-stroke-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mars-stroke-up 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mars-stroke-up 3s ease-in-out infinite alternate;
}
</style>