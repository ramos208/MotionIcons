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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 224c0-24.3 13.7-45.2 33.6-56-.7 2.6-1.6 5.2-1.6 8 0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8 19.9 10.8 33.6 31.7 33.6 56 0 35.3-28.7 64-64 64s-64-28.7-64-64zm224 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-112c-35.3 0-64-28.7-64-64 0-24.3 13.7-45.2 33.6-56-.7 2.6-1.6 5.2-1.6 8 0 17.7 14.3 32 32 32s32-14.3 32-32c0-2.8-.9-5.4-1.6-8 19.9 10.8 33.6 31.7 33.6 56 0 35.3-28.7 64-64 64z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: meh-rolling-eyes
// Category: search
// Physics Presets: Dynamic kinetic adaptation for meh-rolling-eyes (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-meh-rolling-eyes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-meh-rolling-eyes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-meh-rolling-eyes 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-meh-rolling-eyes 3s ease-in-out infinite alternate;
}
</style>