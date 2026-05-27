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
      <path d="M254.4 6.6c3.5-4.3 9-6.5 14.5-5.7 46.9 6.3 83.1 46.5 83.1 95.1 0 11.2-1.9 22-5.5 32l5.5 0c35.3 0 64 28.7 64 64 0 19.1-8.4 36.3-21.7 48l13.7 0c39.8 0 72 32.2 72 72 0 23.2-11 43.8-28 57 34.1 5.7 60 35.3 60 71 0 39.8-32.2 72-72 72L72 512c-39.8 0-72-32.2-72-72 0-35.7 25.9-65.3 60-71-17-13.2-28-33.8-28-57 0-39.8 32.2-72 72-72l13.7 0c-13.3-11.7-21.7-28.9-21.7-48 0-35.3 28.7-64 64-64l16.2 0c44.1-.1 79.8-35.9 79.8-80 0-9.2-1.5-17.9-4.3-26.1-1.8-5.2-.8-11.1 2.8-15.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: poop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for poop (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-poop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-poop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-poop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-poop 3s ease-in-out infinite alternate;
}
</style>