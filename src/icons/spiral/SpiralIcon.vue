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
      <path d="M115.5 7.4c13.6-11.3 33.8-9.5 45.1 4.1s9.5 33.8-4.1 45.1C100.2 103.5 64 175.2 64 256 64 362 150 448 256 448s192-86 192-192c0-75.1-60.9-136-136-136S176 180.9 176 256c0 44.2 35.8 80 80 80s80-35.8 80-80c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-48.6 39.4-88 88-88s88 39.4 88 88c0 79.5-64.5 144-144 144S112 335.5 112 256c0-110.5 89.5-200 200-200s200 89.5 200 200c0 141.4-114.6 256-256 256S0 397.4 0 256C0 155.8 45 66.1 115.5 7.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spiral
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spiral (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spiral {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spiral {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spiral 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spiral 3s ease-in-out infinite alternate;
}
</style>