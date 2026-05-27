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
      <path d="M9 10.0294C10.3726 8.65685 12.598 8.65685 13.9706 10.0294C15.3431 11.402 15.3431 13.6274 13.9706 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.85289 19.1471C8.04869 22.3429 12.9127 22.8538 16.6418 20.6797C17.5285 20.1627 17.9719 19.9043 17.999 19.3782C18.0261 18.8522 17.5277 18.4882 16.531 17.7603C14.683 16.4107 12.8636 14.7603 11.0516 12.9484C9.23967 11.1364 7.58927 9.31705 6.23969 7.46904C5.51179 6.47231 5.14784 5.97395 4.62178 6.00105C4.09572 6.02815 3.83725 6.47149 3.32031 7.35818C1.14624 11.0873 1.6571 15.9513 4.85289 19.1471Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5574 2C17.2371 2.17243 18.7811 2.83962 19.9693 4.02583C21.1611 5.21579 21.8299 6.76334 22 8.4465M18.5017 9C18.3026 8.14257 17.8914 7.36144 17.2598 6.73091C16.6314 6.10356 15.8537 5.69396 15 5.49405" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gps-signal01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gps-signal01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gps-signal01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gps-signal01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gps-signal01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gps-signal01 3s ease-in-out infinite alternate;
}
</style>