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
      <path d="M14 20H17C19.2091 20 21 18.2091 21 16V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 22.5L14 20L16.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11L14 5C14 4.44772 13.5523 4 13 4L7 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 4H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 2L4 13C4 13.5523 4.44772 14 5 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crop-rotate-br
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for crop-rotate-br (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crop-rotate-br {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crop-rotate-br {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crop-rotate-br 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-crop-rotate-br 4s linear infinite alternate;
}
</style>