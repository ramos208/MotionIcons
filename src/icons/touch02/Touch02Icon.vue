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
      <path d="M17.1422 21.998C17.0905 20.084 17.2194 19.8535 17.3561 19.4277C17.4929 19.002 18.4492 17.4665 18.7875 16.3695C19.8823 12.8202 18.862 12.0653 17.5016 11.0588C15.9931 9.94257 13.1478 9.37728 11.7367 9.49966V3.7462C11.7367 2.78288 10.9558 2.00195 9.99246 2.00195C9.02914 2.00195 8.24821 2.78288 8.24821 3.7462V9.96607M8.24872 21.9988V20.9854C8.18426 20.041 7.24627 18.9235 6.0777 17.3166C4.87607 15.576 4.61785 14.6973 4.80689 13.8848C4.90426 13.4694 5.15692 12.7832 6.39745 11.6104L8.24821 9.96607M8.24821 14.0323V9.96607" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch02 3s ease-in-out infinite alternate;
}
</style>