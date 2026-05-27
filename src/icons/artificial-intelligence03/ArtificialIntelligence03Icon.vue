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
      <path d="M16 22V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2C10.096 2 8.99733 2.23694 8 2.66482M6.5 16.9962V22M6.5 16.9962C5.13927 16.0364 4.08188 14.6752 3.5 13.085M6.5 16.9962C7.25065 17.5257 8.09362 17.9331 9 18.1895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.75 3.25L6 5.5H10M3.5 3.25C3.5 3.66421 3.16421 4 2.75 4C2.33579 4 2 3.66421 2 3.25C2 2.83579 2.33579 2.5 2.75 2.5C3.16421 2.5 3.5 2.83579 3.5 3.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.75 8.75H10M3.5 8.75C3.5 9.16421 3.16421 9.5 2.75 9.5C2.33579 9.5 2 9.16421 2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: artificial-intelligence03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for artificial-intelligence03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-artificial-intelligence03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-artificial-intelligence03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-artificial-intelligence03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-artificial-intelligence03 3s ease-in-out infinite alternate;
}
</style>