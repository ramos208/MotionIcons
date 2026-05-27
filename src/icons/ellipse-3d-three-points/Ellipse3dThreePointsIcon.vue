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
      <path d="M5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 22H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 22L5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 23C5.55228 23 6 22.5523 6 22C6 21.4477 5.55228 21 5 21C4.44772 21 4 21.4477 4 22C4 22.5523 4.44772 23 5 23Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4.19329C9.3696 2.8209 11.1081 2 13 2C17.4183 2 21 6.47715 21 12C21 15.2712 19.7435 18.1755 17.8008 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/><path d="M8.19917 20C7.76265 19.59 7.36077 19.1255 7 18.6146" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 23C13.5523 23 14 22.5523 14 22C14 21.4477 13.5523 21 13 21C12.4477 21 12 21.4477 12 22C12 22.5523 12.4477 23 13 23Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ellipse-3d-three-points
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ellipse-3d-three-points (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ellipse-3d-three-points {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ellipse-3d-three-points {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ellipse-3d-three-points 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ellipse-3d-three-points 3s ease-in-out infinite alternate;
}
</style>