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
      <path d="M3.904 11.571v1.501H5.46c-.075.845-.712 1.274-1.539 1.274-1.255 0-1.934-1.157-1.934-2.3 0-1.118.65-2.317 1.906-2.317.77 0 1.321.468 1.586 1.166l1.812-.76C6.66 8.765 5.489 8.086 3.979 8.086 1.614 8.087 0 9.654 0 12.037c0 2.309 1.604 3.876 3.913 3.876 1.227 0 2.308-.439 3.025-1.44.651-.916.731-1.831.75-2.904zM13.65 8.3l-1.586 3.95-1.5-3.95H8.67l-1.255 7.392h1.91l.619-4.257h.019l1.695 4.257h.765l1.775-4.257h.024l.538 4.257h1.92L15.562 8.3zm7.708 3.473 2.086-3.475h-2.128l-1.11 1.767L19.012 8.3H16.68l2.459 3.47-2.46 3.922h2.333l1.33-2.223 1.576 2.223H24l-2.642-3.92"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gmx
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gmx (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gmx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gmx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gmx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gmx 3s ease-in-out infinite alternate;
}
</style>