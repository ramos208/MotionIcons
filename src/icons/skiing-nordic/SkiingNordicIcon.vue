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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M336 96c26.5 0 48-21.5 48-48S362.5 0 336 0s-48 21.5-48 48 21.5 48 48 48zm216 320c-13.2 0-24 10.7-24 24 0 13.2-10.8 24-24 24h-69.5L460 285.6c11.7-4.7 20.1-16.2 20.1-29.6 0-17.7-14.3-32-32-32h-44L378 170.8c-12.5-25.5-35.5-44.2-61.8-50.9L245 98.7c-28.3-6.8-57.8-.5-80.8 17.1l-39.7 30.4c-14 10.7-16.7 30.8-5.9 44.9.7.9 1.7 1.3 2.4 2.1L66.9 464H24c-13.2 0-24 10.7-24 24s10.8 24 24 24h480c39.7 0 72-32.3 72-72 0-13.2-10.8-24-24-24zm-260.5 48h-96.9l43.1-91-22-13c-12.1-7.2-21.9-16.9-29.5-27.8L123.7 464H99.5l52.3-261.4c4.1-1 8.1-2.9 11.7-5.6l39.7-30.4c7.7-5.9 17.4-8 25.3-6.1l14.7 4.4-37.5 87.4c-12.6 29.5-1.3 64 26.3 80.3l85 50.2-25.5 81.2zm110.6 0h-43.6l23.6-75.5c5.9-20.8-2.9-43.1-21.6-54.4L299.3 298l31.3-78.3 20.3 41.4c8 16.3 24.9 26.9 43.1 26.9h33.3l-25.2 176z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: skiing-nordic
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for skiing-nordic (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-skiing-nordic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-skiing-nordic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-skiing-nordic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-skiing-nordic 3s ease-in-out infinite alternate;
}
</style>