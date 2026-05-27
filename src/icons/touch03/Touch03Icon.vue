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
      <path d="M6.37124 12.171L8.50514 14V4.25C8.50514 3.2835 9.28864 2.5 10.2551 2.5C11.2216 2.5 12.0051 3.2835 12.0051 4.25V9.5L14.993 9.97757C16.9216 10.2669 17.886 10.4115 18.5652 10.8184C19.6872 11.4906 20.5 12.5 20.5 13.9736C20.5 15 20.2463 15.6886 19.6296 17.5387C19.2383 18.7127 19.0426 19.2996 18.7236 19.7643C18.1983 20.5293 17.4233 21.0878 16.5315 21.3442C15.9898 21.5 15.3711 21.5 14.1336 21.5H13.0847C11.4395 21.5 10.6169 21.5 9.88462 21.1981C9.75329 21.144 9.62494 21.0829 9.50012 21.0151C8.80405 20.6371 8.28533 19.9987 7.24791 18.7219L3.88941 14.5883C3.37331 13.9531 3.36987 13.0441 3.88114 12.405C4.49565 11.6369 5.62437 11.5308 6.37124 12.171Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch03 3s ease-in-out infinite alternate;
}
</style>