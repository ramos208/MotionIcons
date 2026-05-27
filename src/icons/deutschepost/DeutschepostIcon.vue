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
      <path d="M11.057 18.221 7.839 21.47H4.652l3.219-3.249zm-4.299 0L3.541 21.47H.354l3.219-3.249zm8.227 0 3.219 3.249h-3.187l-3.22-3.249zm4.3 0 3.217 3.249h-3.187l-3.218-3.249zM10.465 2.53c3.765-.003 6.88 2.74 6.865 6.676.553-1.502.937-3.789 1.016-5.39L24 5.22c-.452 6.621-5.43 12.42-12.815 12.416C2.832 17.635-.397 10.389.039 4.899l2.453-.779c-.399 3.125.57 5.378 1.238 6.41-.795-4.42 2.549-7.998 6.735-8m.011 2.301a4.519 4.519 0 0 0-4.524 4.514 4.519 4.519 0 0 0 4.524 4.514 4.518 4.518 0 0 0 4.525-4.514 4.518 4.518 0 0 0-4.525-4.514"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: deutschepost
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for deutschepost (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-deutschepost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-deutschepost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-deutschepost 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-deutschepost 3s ease-in-out infinite alternate;
}
</style>