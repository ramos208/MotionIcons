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
      <path d="m8.727 1.554 2.727 4.334v16.558h1.091V5.889l2.728-4.335zm-6 4.948V9.8h7.091c.003-.83 0-1.672-.006-2.498 0-.383-.356-.732-.718-.8H2.727zm12.303.001c-.402.024-.835.41-.834.837l-.014 12.619c0 .57.767 1.065 1.207.727l8.28-6.331c.441-.335.44-1.12 0-1.455l-8.265-6.287a.553.553 0 0 0-.374-.11zM-.001 12v3.299h9.818V12zm4.363 5.497v3.3h5.455v-3.3z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kdenlive
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kdenlive (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kdenlive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kdenlive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kdenlive 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kdenlive 3s ease-in-out infinite alternate;
}
</style>