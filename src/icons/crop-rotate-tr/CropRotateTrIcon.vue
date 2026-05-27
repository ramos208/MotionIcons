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
      <path d="M20 10V7C20 4.79086 18.2091 3 16 3H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.5 7.5L20 10L17.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 17L14 11C14 10.4477 13.5523 10 13 10L7 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L4 19C4 19.5523 4.44772 20 5 20L16 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crop-rotate-tr
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for crop-rotate-tr (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crop-rotate-tr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crop-rotate-tr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crop-rotate-tr 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-crop-rotate-tr 4s linear infinite alternate;
}
</style>