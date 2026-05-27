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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M409.6 111.9c22.6-3.2 73.5-12 88.3-26.8 19.2-19.2 18.9-50.6-.7-70.2S446-5 426.9 14.2c-14.8 14.8-23.5 65.7-26.8 88.3-.8 5.5 3.9 10.2 9.5 9.4zM102.4 400.1c-22.6 3.2-73.5 12-88.3 26.8-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3.8-5.5-3.9-10.2-9.5-9.4zm311.7-256.5c-33 3.9-48.6-25.1-45.7-45.7 3.4-24 7.4-42.1 11.5-56.5C285.1-13.4 161.8-.5 80.6 80.6-.5 161.7-13.4 285 41.4 379.9c14.4-4.1 32.4-8 56.5-11.5 33.2-3.9 48.6 25.2 45.7 45.7-3.4 24-7.4 42.1-11.5 56.5 94.8 54.8 218.1 41.9 299.3-39.2s94-204.4 39.2-299.3c-14.4 4.1-32.5 8-56.5 11.5zM255.7 106c3.3-13.2 22.4-11.5 23.6 1.8l4.8 52.3 52.3 4.8c13.4 1.2 14.9 20.3 1.8 23.6l-90.5 22.6c-8.9 2.2-16.7-5.9-14.5-14.5l22.5-90.6zm-90.9 230.3L160 284l-52.3-4.8c-13.4-1.2-14.9-20.3-1.8-23.6l90.5-22.6c8.8-2.2 16.7 5.8 14.5 14.5L188.3 338c-3.1 13.2-22.2 11.7-23.5-1.7zm215.7 44.2c-29.3 29.3-75.7 50.4-116.7 50.4-18.9 0-36.6-4.5-51-14.7-9.8-6.9-8.7-21.8 2-27.2 28.3-14.6 63.9-42.4 97.8-76.3s61.7-69.6 76.3-97.8c5.4-10.5 20.2-11.9 27.3-2 32.3 45.3 7.1 124.7-35.7 167.6z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: grin-squint-tears
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for grin-squint-tears (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-grin-squint-tears {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-grin-squint-tears {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-grin-squint-tears 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-grin-squint-tears 3s ease-in-out infinite alternate;
}
</style>