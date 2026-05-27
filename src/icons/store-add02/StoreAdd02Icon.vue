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
      <path d="M3 10.5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H12.5M21 10.5V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 17H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 18.5H22M18.5 22V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.7947 2.00254L6.14885 2.03002C4.41069 1.94542 3.96502 3.2116 3.96502 3.83056C3.96502 4.38414 3.88957 5.19117 2.82426 6.70798C1.75895 8.22478 1.839 8.67537 2.43973 9.72544C2.9383 10.5969 4.20643 10.9374 4.86764 10.9946C6.96785 11.0398 7.98968 9.32381 7.98968 8.1178C9.03154 11.1481 11.9946 11.1481 13.3148 10.8016C14.6376 10.4545 15.7707 9.2118 16.0381 8.1178C16.194 9.47735 16.6672 10.2707 18.0653 10.8158C19.5135 11.3805 20.7589 10.5174 21.3838 9.9642C22.0087 9.41096 22.4097 8.18278 21.2958 6.83288C20.5276 5.90195 20.2074 5.02494 20.1023 4.11599C20.0413 3.58931 19.9878 3.02336 19.5961 2.66323C19.0238 2.13691 18.2026 1.97722 17.7947 2.00254Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: store-add02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for store-add02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-store-add02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-store-add02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-store-add02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-store-add02 3s ease-in-out infinite alternate;
}
</style>