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
      <path d="M21.496 8.8a13.892 13.892 0 0 0-2.453.198c-.6.11-1.165.223-1.693.57-.807.526-1.076 1.49-1.086 2.394-.012.98.283 2.06 1.21 2.54.735.384 1.537.552 2.355.624 1.397.118 2.792.1 4.171-.09v-.98c-1.04.19-2.107.31-3.184.152-1.652-.24-1.93-1.473-1.93-2.286 0-.451.06-.987.482-1.526.676-.865 2.667-.956 4.55-.59V8.95a22.777 22.777 0 0 0-2.422-.15zm-12.812.197v4.446c.03.744.295 1.518 1.834 1.581 1.814.075 3.54.045 5.334-.024v-.896c-.89.014-3.487.001-3.65 0-.704-.042-.973-.256-.998-.837a32.12 32.12 0 0 1-.02-1.055h4.177v-.834h-4.176V9.851h4.582v-.854zM0 8.997v5.999h1.146v-4.254l3.383 3.764c.41.404.763.478 1.122.49h2.015V8.997h-1.15v4.397l-3.39-3.757c-.232-.227-.753-.64-1.194-.64z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nec
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nec (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nec {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nec {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nec 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nec 3s ease-in-out infinite alternate;
}
</style>