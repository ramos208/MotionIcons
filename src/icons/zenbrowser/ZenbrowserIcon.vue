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
      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12 9.846c5.438 0 9.846-4.408 9.846-9.846S17.438 2.154 12 2.154 2.154 6.562 2.154 12 6.562 21.846 12 21.846zM20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 6.462a6.462 6.462 0 1 0 0-12.924 6.462 6.462 0 0 0 0 12.924zm0-1.847a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23zM15.692 12a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zenbrowser
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zenbrowser (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zenbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zenbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zenbrowser 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zenbrowser 3s ease-in-out infinite alternate;
}
</style>