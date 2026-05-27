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
      <path d="M229.66,218.34l-48.42-48.41c1.1-.33,2.19-.68,3.27-1.07A60,60,0,0,0,220.37,92a8,8,0,0,0-10.25-4.78l-44.2,16.08c.32-.62.64-1.24.93-1.88A60,60,0,0,0,92,19.65,8,8,0,0,0,87.18,29.9l16.08,44.2c-.62-.32-1.24-.64-1.88-.93a60,60,0,0,0-81.73,74.89,8,8,0,0,0,10.25,4.78l44.2-16.09c-.32.63-.64,1.25-.93,1.89a60,60,0,0,0,74.89,81.73,8,8,0,0,0,4.78-10.25l-16.09-44.2c.63.32,1.25.64,1.89.93a59.87,59.87,0,0,0,22.48,5.58l57.22,57.23a8,8,0,0,0,11.32-11.32ZM131.07,36.15A44,44,0,0,1,134.8,114L105.19,32.63A43.63,43.63,0,0,1,131.07,36.15ZM32.63,134.82A44,44,0,0,1,114,105.22ZM109,203.87a44,44,0,0,1-3.73-77.81l29.6,81.33A43.6,43.6,0,0,1,109,203.87Zm55.56-47.38h-.11a44.14,44.14,0,0,1-38.34-21.69l81.33-29.61a44.06,44.06,0,0,1-42.88,51.3Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pinwheel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pinwheel (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pinwheel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pinwheel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pinwheel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pinwheel 3s ease-in-out infinite alternate;
}
</style>