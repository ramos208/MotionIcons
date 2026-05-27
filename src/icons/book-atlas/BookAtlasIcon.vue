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
      <path d="M96 512l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-66.7c18.6-6.6 32-24.4 32-45.3l0-288c0-26.5-21.5-48-48-48L96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96zM64 416c0-17.7 14.3-32 32-32l256 0 0 64-256 0c-17.7 0-32-14.3-32-32zM310.6 208L279 208c-1.4 23.1-6 44.2-12.6 61.2 22.7-12.5 39.4-34.8 44.2-61.2zm-173.1 0c4.8 26.4 21.5 48.7 44.2 61.2-6.7-17-11.2-38-12.6-61.2l-31.6 0zm76.4 55c4.5 9.6 8.2 13.8 10.2 15.5 2-1.7 5.7-5.8 10.2-15.5 6.2-13.4 11.1-32.5 12.7-55l-45.8 0c1.6 22.5 6.5 41.6 12.7 55zm-12.7-87l45.8 0c-1.6-22.5-6.5-41.6-12.7-55-4.5-9.6-8.2-13.8-10.2-15.5-2 1.7-5.7 5.8-10.2 15.5-6.2 13.4-11.1 32.5-12.7 55zm109.5 0c-4.8-26.4-21.5-48.7-44.2-61.2 6.7 17 11.2 38 12.6 61.2l31.6 0zM169 176c1.4-23.1 6-44.2 12.6-61.2-22.7 12.5-39.4 34.8-44.2 61.2l31.6 0zM96 192a128 128 0 1 1 256 0 128 128 0 1 1 -256 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: book-atlas
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for book-atlas (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-book-atlas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-book-atlas {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-book-atlas 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-book-atlas 3s ease-in-out infinite alternate;
}
</style>