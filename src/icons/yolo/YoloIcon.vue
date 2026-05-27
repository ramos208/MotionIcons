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
      <path d="M18.25 0c-3.05 0-5.52 2.477-5.52 5.523 0 3.842-3.125 6.967-6.972 6.967-1.506 0-2.894-.46-4.03-1.26 1.105 1.98 2.765 3.6 4.759 4.67v2.51c0 3.04 2.428 5.56 5.463 5.59 3.07 0 5.58-2.46 5.58-5.52V15.9c3.64-1.96 6.16-5.8 6.23-10.208v-.165C23.76 2.477 21.28 0 18.25 0ZM5.758.0002C2.715.0002.2399 2.477.2399 5.523c0 3.044 2.4751 5.517 5.5181 5.517 3.044 0 5.512-2.473 5.512-5.517 0-3.046-2.468-5.5228-5.512-5.5228Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: yolo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for yolo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-yolo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-yolo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-yolo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-yolo 3s ease-in-out infinite alternate;
}
</style>