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
      <path d="M21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 6.5C3 4.85008 3 4.02513 3.51256 3.51256C4.02513 3 4.85008 3 6.5 3C8.14992 3 8.97487 3 9.48744 3.51256C10 4.02513 10 4.85008 10 6.5C10 8.14992 10 8.97487 9.48744 9.48744C8.97487 10 8.14992 10 6.5 10C4.85008 10 4.02513 10 3.51256 9.48744C3 8.97487 3 8.14992 3 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 17.5C3 15.8501 3 15.0251 3.51256 14.5126C4.02513 14 4.85008 14 6.5 14C8.14992 14 8.97487 14 9.48744 14.5126C10 15.0251 10 15.8501 10 17.5C10 19.1499 10 19.9749 9.48744 20.4874C8.97487 21 8.14992 21 6.5 21C4.85008 21 4.02513 21 3.51256 20.4874C3 19.9749 3 19.1499 3 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 17.5C14 15.8501 14 15.0251 14.5126 14.5126C15.0251 14 15.8501 14 17.5 14C19.1499 14 19.9749 14 20.4874 14.5126C21 15.0251 21 15.8501 21 17.5C21 19.1499 21 19.9749 20.4874 20.4874C19.9749 21 19.1499 21 17.5 21C15.8501 21 15.0251 21 14.5126 20.4874C14 19.9749 14 19.1499 14 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 10V14M14 17.5H10M10 6.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flow (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flow 3s ease-in-out infinite alternate;
}
</style>