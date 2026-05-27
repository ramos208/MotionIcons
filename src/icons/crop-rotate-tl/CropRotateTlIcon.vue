<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M10 4H7C4.79086 4 3 5.79086 3 8V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 1.5L10 4L7.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 17L20 11C20 10.4477 19.5523 10 19 10L13 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 8L10 19C10 19.5523 10.4477 20 11 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crop-rotate-tl
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for crop-rotate-tl (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-crop-rotate-tl {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crop-rotate-tl {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crop-rotate-tl 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-crop-rotate-tl 4s linear infinite alternate;
}
</style>