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
      <path d="M17.482 9.712c1.64 0 3.108.69 4.1 1.813.044-.388.087-.777.087-1.208C21.67 5.007 17.353.69 12 .69c-5.353 0-9.67 4.316-9.67 9.626 0 .345 0 .69.044 1.036a8.688 8.688 0 017.943-5.137c2.848 0 5.352 1.381 6.95 3.496h.215zm-7.122-2.72c-4.36 0-7.9 3.54-7.9 7.9s3.54 7.9 7.9 7.9c2.158 0 4.1-.864 5.525-2.245a5.53 5.53 0 01-3.928-5.31c0-2.676 1.9-4.92 4.446-5.438-1.468-1.684-3.626-2.806-6.043-2.806zM4.79 21.583A11.958 11.958 0 010 12C0 5.353 5.396 0 12 0s12 5.396 12 12-5.396 12-12 12c-1.554 0-3.022-.302-4.36-.82-1.079-.389-2.028-.907-2.849-1.597zm12.777-1.51a4.827 4.827 0 004.835-4.835 4.827 4.827 0 00-4.835-4.834 4.827 4.827 0 00-4.834 4.834 4.827 4.827 0 004.834 4.835Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pagseguro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pagseguro (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pagseguro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pagseguro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pagseguro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pagseguro 3s ease-in-out infinite alternate;
}
</style>