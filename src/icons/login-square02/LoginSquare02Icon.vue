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
      <path d="M19.9999 6.99976C19.923 5.58248 19.7124 4.66416 19.1363 3.96219C18.9701 3.75965 18.7844 3.57394 18.5818 3.40772C17.4755 2.49976 15.8318 2.49976 12.5443 2.49976L11.9999 2.49992C8.2287 2.49992 6.34308 2.49992 5.17151 3.67149C3.99994 4.84307 3.99994 6.72868 3.99994 10.4999V13.4999C3.99994 17.2712 3.99994 19.1568 5.17151 20.3283C6.34308 21.4999 8.2287 21.4999 11.9999 21.4999L12.5443 21.4998C15.8318 21.4998 17.4755 21.4998 18.5818 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3354 19.923 18.417 19.9999 16.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 7.99992C13 7.99992 9.00001 10.9459 9 12C8.99999 13.054 13 15.9999 13 15.9999M9.5 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: login-square02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for login-square02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-login-square02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-login-square02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-login-square02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-login-square02 3s ease-in-out infinite alternate;
}
</style>