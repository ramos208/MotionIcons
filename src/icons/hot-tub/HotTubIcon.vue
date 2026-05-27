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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M414.21 177.65c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C378.96 6.14 372.22 0 364.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zm-108 0c1.02 8.21 7.75 14.35 15.75 14.35h16.12c9.51 0 17.08-8.57 16-18.35-4.34-39.11-22.4-74.53-50.13-97.16-17.37-14.17-28.82-36.75-31.98-62.15C270.96 6.14 264.22 0 256.23 0h-16.12c-9.51 0-17.09 8.57-16 18.35 4.34 39.11 22.4 74.53 50.13 97.16 17.36 14.17 28.82 36.75 31.97 62.14zM480 256H256l-110.93-83.2a63.99 63.99 0 0 0-38.4-12.8H64c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V288c0-17.67-14.33-32-32-32zM128 440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zm96 0c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8V328c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v112zM64 128c35.35 0 64-28.65 64-64S99.35 0 64 0 0 28.65 0 64s28.65 64 64 64z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hot-tub
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hot-tub (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hot-tub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hot-tub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hot-tub 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hot-tub 3s ease-in-out infinite alternate;
}
</style>