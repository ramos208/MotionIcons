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
      <path d="M16.4014 12.8149L19.4182 13.9953C21.1582 14.6762 22.0282 15.0166 21.9993 15.5567C21.9705 16.0967 21.0625 16.3443 19.2466 16.8395L19.2466 16.8395C18.7059 16.987 18.4356 17.0607 18.2482 17.2482C18.0607 17.4356 17.987 17.7059 17.8395 18.2466L17.8395 18.2466C17.3443 20.0625 17.0967 20.9705 16.5567 20.9993C16.0166 21.0282 15.6762 20.1582 14.9953 18.4182L13.8149 15.4014C13.102 13.5797 12.7456 12.6688 13.2072 12.2072C13.6688 11.7456 14.5797 12.102 16.4014 12.8149Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 17C3.89543 17 3 16.1046 3 15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15C7 16.1046 6.10457 17 5 17ZM5 17C5 18.6 6.33333 19.6667 7 20M21.8987 11C21.9655 10.6734 22 10.3395 22 10C22 6.13401 17.5228 3 12 3C6.47715 3 2 6.13401 2 10C2 11.3199 2.52185 12.5544 3.42901 13.6081M6.84631 16C7.80456 16.4042 8.86753 16.6991 10 16.86" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lasso-select
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lasso-select (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lasso-select {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lasso-select {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lasso-select 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lasso-select 3s ease-in-out infinite alternate;
}
</style>