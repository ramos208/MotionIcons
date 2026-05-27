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
      <path d="M12.392 0c-6.752 0-12 5.498-12 12 0 6.574 5.313 12 12 12 4.283 0 8.087-2.254 10.217-5.704a.571.571 0 0 0-.2-.795l-5.55-3.204a.572.572 0 0 0-.76.177 4.453 4.453 0 0 1-3.707 1.983c-2.458 0-4.458-2-4.458-4.457 0-2.458 2-4.457 4.458-4.457 1.491 0 2.877.741 3.707 1.983a.571.571 0 0 0 .76.177l5.55-3.204a.571.571 0 0 0 .2-.795A11.998 11.998 0 0 0 12.392 0zm0 3.527c3.048 0 5.72 1.61 7.213 4.026l-2.99 1.726c-.037.021-.085.013-.108-.026a4.942 4.942 0 0 0-4.115-2.2A4.953 4.953 0 0 0 7.445 12c0 .9.241 1.745.663 2.473l-2.342 1.353a.327.327 0 0 0-.112.458 7.977 7.977 0 0 0 6.738 3.7 7.978 7.978 0 0 0 6.789-3.781l2.983 1.722a.08.08 0 0 1 .028.113 11.447 11.447 0 0 1-9.8 5.472C6.045 23.51.882 18.346.882 12c0-2.095.562-4.06 1.544-5.754l2.35 1.356c.15.088.345.04.439-.11a8.467 8.467 0 0 1 7.177-3.966zM22.965 8.95a.666.666 0 0 0-.336.088l-4.149 2.395a.654.654 0 0 0 0 1.131l4.149 2.396c.434.25.98-.064.98-.566v-4.79a.655.655 0 0 0-.644-.654zm-.663 1.785v2.528L20.112 12z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: construct3
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for construct3 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-construct3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-construct3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-construct3 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-construct3 3s ease-in-out infinite alternate;
}
</style>