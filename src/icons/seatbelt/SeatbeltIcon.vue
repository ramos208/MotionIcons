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
      <path d="M172,68a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,68ZM128,96a28,28,0,1,1,28-28A28,28,0,0,1,128,96Zm80,128a8,8,0,0,1-8,8H56a8,8,0,0,1-5.29-14l98.07-86.54a64,64,0,0,0-84,50.33A8,8,0,0,1,49,179.25a80,80,0,0,1,113.16-59.59L186.71,98a8,8,0,0,1,10.58,12L77.16,216H200A8,8,0,0,1,208,224Zm-14.27-77.62A79.6,79.6,0,0,1,208,192a8,8,0,0,1-16,0,63.67,63.67,0,0,0-11.41-36.49,8,8,0,0,1,13.14-9.13Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: seatbelt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for seatbelt (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-seatbelt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-seatbelt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-seatbelt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-seatbelt 3s ease-in-out infinite alternate;
}
</style>