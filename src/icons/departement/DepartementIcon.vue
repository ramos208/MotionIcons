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
      <path d="M21 13.8829L20.9999 9.12817C20.9993 7.99289 20.999 7.42525 20.723 6.94931C20.447 6.47337 19.9544 6.19544 18.9692 5.63957L13.944 2.80421C12.9938 2.26807 12.5187 2 12 2C11.4813 2 11.0062 2.26807 10.056 2.80421L5.0308 5.63957C4.04562 6.19544 3.55303 6.47337 3.277 6.94931C3.00096 7.42525 3.00069 7.99289 3.00013 9.12817L3 13.8829C3 17.7094 3 19.6226 4.17157 20.8113C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8113C21 19.6226 21 17.7094 21 13.8829Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 13H8M16 13H14M10 9H8M10 17H8M16 9H14M16 17H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: departement
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for departement (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-departement {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-departement {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-departement 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-departement 3s ease-in-out infinite alternate;
}
</style>