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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M400 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 448c-8.8 0-16 7.2-16 16s-7.2 16-16 16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16zm-282.2 8.6c-6.2 6.2-16.4 6.3-22.6 0l-67.9-67.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l67.9 67.9c9.4 9.4 21.7 14 34 14s24.6-4.7 33.9-14c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.3-22.7 0zm56.1-179.8l-93.7 93.7c-12.5 12.5-12.5 32.8 0 45.2 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l91.9-91.9-30.2-30.2c-5-5-9.4-10.7-13.2-16.8zM128 160h105.5l-20.1 17.2c-13.5 11.5-21.6 28.4-22.3 46.1-.7 17.8 6.1 35.2 18.7 47.7l78.2 78.2V432c0 17.7 14.3 32 32 32s32-14.3 32-32v-89.4c0-12.6-5.1-25-14.1-33.9l-61-61c.5-.4 1.2-.6 1.7-1.1l82.3-82.3c11.5-11.5 14.9-28.6 8.7-43.6-6.2-15-20.7-24.7-37-24.7H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: skating
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for skating (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-skating {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-skating {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-skating 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-skating 3s ease-in-out infinite alternate;
}
</style>