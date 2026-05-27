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
      <path d="M3.99847 14.0034V21.9997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.99847 18.3026L7.95839 19.8479C10.4759 20.8303 11.7348 21.3216 12.6312 20.7699C13.5277 20.2182 13.5277 18.9524 13.5277 16.4205V8.0061" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5512 2.99895V2.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.07806 8.00604H20.0015M9.34851 6.21058C8.70062 6.81563 8.57262 6.90994 8.39517 7.07597C8.14082 7.31396 8.0538 7.67835 8.14236 8.01464L10.196 15.8126C10.3301 16.3218 10.751 16.7057 11.2719 16.7938C12.7667 17.0466 14.2916 17.0556 15.786 16.7918C16.2798 16.7046 16.6788 16.3416 16.8109 15.8596L18.9668 7.98768C19.0519 7.67688 18.9918 7.33475 18.7674 7.10279C18.5846 6.91382 18.4566 6.84432 17.7779 6.21058C17.0255 5.50786 16.3052 4.23972 16.001 3.85472C15.6968 3.46971 15.4628 3.28072 15.0767 3.19345C14.0804 2.96823 13.0461 2.96823 12.0497 3.19345C11.6637 3.28072 11.4646 3.42312 11.1255 3.85472C10.7863 4.28631 10.101 5.50786 9.34851 6.21058Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wall-lamp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wall-lamp (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wall-lamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wall-lamp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wall-lamp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wall-lamp 3s ease-in-out infinite alternate;
}
</style>