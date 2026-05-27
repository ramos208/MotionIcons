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
      <path d="M7.5 15H4.5M6 3V15M6 3C5.20721 3 4.18884 3.11448 3.37806 3.22723C3.03514 3.27492 2.86368 3.29877 2.71192 3.38287C2.39625 3.55779 2.1418 3.94131 2.04604 4.38652C2 4.60057 2 4.84482 2 5.33333M6 3C6.79279 3 7.81116 3.11448 8.62194 3.22723C8.96486 3.27492 9.13632 3.29877 9.28808 3.38287C9.60375 3.55779 9.8582 3.94131 9.95396 4.38652C10 4.60057 10 4.84482 10 5.33333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 15H16.5M18 3V15M18 3C17.2072 3 16.1888 3.11448 15.3781 3.22723C15.0351 3.27492 14.8637 3.29877 14.7119 3.38287C14.3963 3.55779 14.1418 3.94131 14.046 4.38652C14 4.60057 14 4.84482 14 5.33333M18 3C18.7928 3 19.8112 3.11448 20.6219 3.22723C20.9649 3.27492 21.1363 3.29877 21.2881 3.38287C21.6037 3.55779 21.8582 3.94131 21.954 4.38652C22 4.60057 22 4.84482 22 5.33333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 19H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 19L22 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: text-variable-front
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for text-variable-front (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-text-variable-front {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-text-variable-front {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-text-variable-front 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-text-variable-front 3s ease-in-out infinite alternate;
}
</style>