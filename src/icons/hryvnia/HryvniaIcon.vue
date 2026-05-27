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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M368 240c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-41.86c13.41-28.63 13.74-63.33-4.13-94.05C303.34 49.84 267.1 32 229.96 32h-78.82c-24.32 0-47.86 8.53-66.54 24.09L72.83 65.9c-10.18 8.49-11.56 23.62-3.07 33.8l20.49 24.59c8.49 10.19 23.62 11.56 33.81 3.07l11.73-9.78c4.32-3.6 9.77-5.57 15.39-5.57h83.62c11.69 0 21.2 9.52 21.2 21.2 0 5.91-2.48 11.58-6.81 15.58L219.7 176H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h134.37l-34.67 32H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h41.86c-13.41 28.63-13.74 63.33 4.13 94.05C80.66 462.15 116.9 480 154.04 480h78.82c24.32 0 47.86-8.53 66.54-24.09l11.77-9.81c10.18-8.49 11.56-23.62 3.07-33.8l-20.49-24.59c-8.49-10.19-23.62-11.56-33.81-3.07l-11.75 9.8a23.992 23.992 0 0 1-15.36 5.56H149.2c-11.69 0-21.2-9.52-21.2-21.2 0-5.91 2.48-11.58 6.81-15.58L164.3 336H368c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16H233.63l34.67-32H368z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hryvnia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hryvnia (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hryvnia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hryvnia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hryvnia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hryvnia 3s ease-in-out infinite alternate;
}
</style>