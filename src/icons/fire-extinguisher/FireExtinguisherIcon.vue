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
      <path d="M512 32c0-9.6-4.3-18.7-11.7-24.7S483.1-1.3 473.7 .6l-160 32C301.5 35.1 292 44.3 289 56l-65 0 0-24c0-17.7-14.3-32-32-32L160 0c-17.7 0-32 14.3-32 32l0 28.4c-55.3 12.3-101.3 49.5-125.5 99.1-5.8 11.9-.9 26.3 11.1 32.1s26.3 .9 32.1-11.1C62 146.9 91.8 121.1 128 110l0 28.8c-37.8 18-64 56.5-64 101.2l0 128 224 0 0-128c0-44.7-26.2-83.2-64-101.2l0-34.8 65 0c3 11.7 12.5 20.9 24.7 23.4l160 32c9.4 1.9 19.1-.6 26.6-6.6S512 137.6 512 128l0-96zM288 448l0-32-224 0 0 32c0 35.3 28.7 64 64 64l96 0c35.3 0 64-28.7 64-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fire-extinguisher
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fire-extinguisher (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fire-extinguisher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fire-extinguisher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fire-extinguisher 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fire-extinguisher 3s ease-in-out infinite alternate;
}
</style>