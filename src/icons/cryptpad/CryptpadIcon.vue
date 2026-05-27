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
      <path d="m2.355 0 .008.717.153 12.23c.045 3.668 1.528 6.09 3.425 7.692 1.897 1.602 4.168 2.444 5.844 3.215l.317.146.308-.164c1.492-.788 3.779-1.625 5.72-3.209 1.943-1.584 3.515-3.997 3.515-7.69V5.97L15.22 0Zm9.729 1.416h1.604v6.016h6.542v3.879H15.4c-.055 1.091-.59 1.926-1.256 2.484l.938 4.97h-2.994v3.655l-.018.008c-1.691-.764-3.651-1.55-5.215-2.87-1.653-1.396-2.884-3.32-2.925-6.628l-.02-1.62h4.674c-.003-.054-.006-.108-.006-.164a3.424 3.424 0 0 1 3.41-3.41l.096.002zm3.02.408 4.513 4.194h-4.513zm-3.112 6.91a2.412 2.412 0 0 0-1.043 4.586l-.844 4.448h3.772l-.842-4.448a2.412 2.412 0 0 0-1.043-4.586z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cryptpad
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cryptpad (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cryptpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cryptpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cryptpad 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cryptpad 3s ease-in-out infinite alternate;
}
</style>