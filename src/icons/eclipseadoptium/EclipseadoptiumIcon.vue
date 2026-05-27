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
      <path d="m11.98 14.013-2.632 5.729 6.813 3.058c-1.55-2.754-2.82-5.852-4.18-8.787Zm11.033 4.645L16.277 4.064a3.952 3.952 0 0 1-.387 1.471l-3.6 7.82 3.871 8.361a3.76 3.76 0 0 0 3.445 2.245 3.734 3.734 0 0 0 3.755-3.755c0-.542-.155-1.045-.348-1.548zM15.735 3.755A3.734 3.734 0 0 0 11.982 0C10.51 0 9.27.852 8.65 2.052 6.119 7.582 3.544 13.127.988 18.658c-.232.464-.348 1.006-.348 1.587A3.734 3.734 0 0 0 4.394 24a3.76 3.76 0 0 0 3.445-2.245l7.587-16.413c.193-.503.31-1.045.31-1.587z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: eclipseadoptium
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for eclipseadoptium (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-eclipseadoptium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-eclipseadoptium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-eclipseadoptium 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-eclipseadoptium 3s ease-in-out infinite alternate;
}
</style>