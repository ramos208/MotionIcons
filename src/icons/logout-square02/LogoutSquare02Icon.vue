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
      <path d="M19.9999 6.99974C19.923 5.58247 19.7124 4.66414 19.1363 3.96217C18.9701 3.75963 18.7844 3.57392 18.5818 3.4077C17.4755 2.49974 15.8318 2.49974 12.5443 2.49974L11.9999 2.4999C8.2287 2.4999 6.34308 2.4999 5.17151 3.67147C3.99994 4.84305 3.99994 6.72866 3.99994 10.4999V13.4999C3.99994 17.2711 3.99994 19.1568 5.17151 20.3283C6.34308 21.4999 8.2287 21.4999 11.9999 21.4999L12.5443 21.4997C15.8318 21.4997 17.4755 21.4997 18.5818 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3353 19.923 18.417 19.9999 16.9997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 7.99991C16 7.99991 20 10.9459 20 11.9999C20 13.054 16 15.9999 16 15.9999M19.5 11.9999H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: logout-square02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for logout-square02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-logout-square02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-logout-square02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-logout-square02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-logout-square02 3s ease-in-out infinite alternate;
}
</style>