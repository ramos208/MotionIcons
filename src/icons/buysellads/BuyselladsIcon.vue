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
      <path d="M24 16.4h-2.685l-.716-2.704-3.3 2.704h-2.675l2.796-8.821h3.784zm-5.955-2.785h2.544l-1.272-4.744zM5.581 11.849c.939.151 1.676 1.049 1.676 2.149 0 1.282-.677 2.392-2.403 2.392H0V7.579h4.32c1.736 0 2.573 1.141 2.573 2.251 0 1.09-.474 1.837-1.312 2.019m-3.502 2.634 1.988-.01c.535 0 .868-.313.868-.788 0-.434-.313-.787-.868-.787H2.079zm0-4.986v1.463h1.726c.464 0 .777-.302.777-.736 0-.424-.313-.727-.777-.727zm7.953.454c0 1.302 4.582.202 4.592 3.714 0 1.756-1.171 2.967-3.512 2.967-1.413 0-2.604-.333-3.492-.938l.888-1.938c.676.525 1.524.898 2.675.898.777 0 1.15-.302 1.15-.716 0-1.443-4.622-.051-4.612-3.795.01-1.463 1.312-2.775 3.552-2.775 1.272 0 2.523.242 3.502.867l-.837 1.928c-.919-.615-1.867-.908-2.735-.888-.656.02-1.171.212-1.171.676"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: buysellads
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for buysellads (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-buysellads {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-buysellads {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-buysellads 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-buysellads 3s ease-in-out infinite alternate;
}
</style>