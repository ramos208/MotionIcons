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
      <path d="M21.652 0c.514 0 .796.6.466.998l-5.616 6.74c-.662.793-.098 1.997.934 1.997h5.433c.516 0 .797.6.467.998L12.467 23.775a.6.6 0 0 1-.468.225.6.6 0 0 1-.468-.225L.661 10.733a.609.609 0 0 1 .468-.998H6.56c1.032 0 1.595-1.204.937-1.997L1.88.998A.608.608 0 0 1 2.346 0Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rolldown
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rolldown (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rolldown {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-rolldown {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rolldown 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rolldown 3s ease-in-out infinite alternate;
}
</style>