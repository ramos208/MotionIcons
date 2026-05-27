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
      <path d="M209.1 516.2c-18.7 18.7-49.1 18.7-67.9 0L28.1 403.1c-18.7-18.7-18.7-49.1 0-67.9l17-17 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 17-17c18.7-18.7 49.1-18.7 67.9 0L548.5 108.9c18.7 18.7 18.7 49.1 0 67.9L209.1 516.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ruler
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ruler (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ruler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ruler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ruler 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ruler 3s ease-in-out infinite alternate;
}
</style>