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
      <path d="M100,124a12,12,0,1,1,12-12A12,12,0,0,1,100,124Zm56-24a12,12,0,1,0,12,12A12,12,0,0,0,156,100Zm-4.27,45.23a45,45,0,0,1-47.46,0,8,8,0,0,0-8.54,13.54,61,61,0,0,0,64.54,0,8,8,0,0,0-8.54-13.54ZM216,80v96a32.06,32.06,0,0,1-24,31v17a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V207a32.06,32.06,0,0,1-24-31V80A32,32,0,0,1,72,48H88V32a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V48h16A32,32,0,0,1,216,80ZM104,48h48V32H104Zm72,176V208H80v16ZM200,80a16,16,0,0,0-16-16H72A16,16,0,0,0,56,80v96a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lego-smiley
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lego-smiley (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lego-smiley {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lego-smiley {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lego-smiley 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lego-smiley 3s ease-in-out infinite alternate;
}
</style>