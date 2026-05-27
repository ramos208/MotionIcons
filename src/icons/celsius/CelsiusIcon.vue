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
      <path d="M21 7C20.9557 6.3469 20.8561 5.88667 20.6321 5.5C20.3679 5.04394 19.9878 4.66523 19.5301 4.40192C18.8315 4 17.8936 4 16.0177 4C14.1419 4 13.2039 4 12.5053 4.40192C12.0476 4.66523 11.6676 5.04394 11.4033 5.5C11 6.19615 11 7.13077 11 9V15C11 16.8692 11 17.8038 11.4033 18.5C11.6676 18.9561 12.0476 19.3348 12.5053 19.5981C13.2039 20 14.1419 20 16.0177 20C17.8936 20 18.8315 20 19.5301 19.5981C19.9878 19.3348 20.3679 18.9561 20.6321 18.5C20.8561 18.1133 20.9557 17.6531 21 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: celsius
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for celsius (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-celsius {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-celsius {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-celsius 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-celsius 3s ease-in-out infinite alternate;
}
</style>