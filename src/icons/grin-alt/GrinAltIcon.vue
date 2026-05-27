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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm63.7 128.7c7.6-11.4 24.7-11.7 32.7 0 12.4 18.4 15.1 36.9 15.7 55.3-.5 18.4-3.3 36.9-15.7 55.3-7.6 11.4-24.7 11.7-32.7 0-12.4-18.4-15.1-36.9-15.7-55.3.5-18.4 3.3-36.9 15.7-55.3zm-160 0c7.6-11.4 24.7-11.7 32.7 0 12.4 18.4 15.1 36.9 15.7 55.3-.5 18.4-3.3 36.9-15.7 55.3-7.6 11.4-24.7 11.7-32.7 0-12.4-18.4-15.1-36.9-15.7-55.3.5-18.4 3.3-36.9 15.7-55.3zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: grin-alt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for grin-alt (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-grin-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-grin-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-grin-alt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-grin-alt 3s ease-in-out infinite alternate;
}
</style>