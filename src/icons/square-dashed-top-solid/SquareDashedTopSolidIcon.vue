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
      <path d="M21.5 10.0023C21.4948 9.4627 21.4851 8.96388 21.4668 8.50184M21.5 14.0035C21.4948 14.5431 21.4851 15.0419 21.4668 15.504M20.8691 5.00077C20.6794 4.57517 20.4333 4.21108 20.1138 3.89167C18.7217 2.5 16.4811 2.5 12 2.5C7.5189 2.5 5.27834 2.5 3.88624 3.89167C3.56673 4.21108 3.32056 4.57517 3.13088 5.00077M20.8691 19.0051C20.6794 19.4307 20.4333 19.7948 20.1138 20.1142C19.7942 20.4336 19.43 20.6797 19.0043 20.8693M14.0012 21.5C14.541 21.4948 15.04 21.4851 15.5022 21.4669M9.99886 21.5C9.45904 21.4948 8.96004 21.4851 8.49784 21.4669M4.99568 20.8693C4.56996 20.6797 4.20575 20.4336 3.88624 20.1142C3.56673 19.7948 3.32056 19.4307 3.13088 19.0051M2.53315 15.504C2.51488 15.0419 2.50516 14.5431 2.5 14.0035M2.5 10.0023C2.50516 9.4627 2.51488 8.96388 2.53315 8.50184" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: square-dashed-top-solid
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for square-dashed-top-solid (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-square-dashed-top-solid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-square-dashed-top-solid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-square-dashed-top-solid 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-square-dashed-top-solid 3s ease-in-out infinite alternate;
}
</style>