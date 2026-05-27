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
      <path d="M152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM104,64a8,8,0,0,0,8-8,40,40,0,0,1,40-40h8a8,8,0,0,0,0-16h-8A56.06,56.06,0,0,0,96,56,8,8,0,0,0,104,64ZM248,216a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32.74c13.77-27.83,29.48-68.69,31.12-112.66A15.91,15.91,0,0,1,79.85,80h88.33a16,16,0,0,1,16,15.28c2.1,47.84,23.84,92.37,35.29,112.72H240A8,8,0,0,1,248,216ZM168.18,96h-16c1.77,43.72,17.39,84.32,31.09,112h18C188.68,184.08,170.18,141.64,168.18,96ZM50.5,208h115C152,179.09,137.77,139.09,136.15,96a7.46,7.46,0,0,1-1-.06L79.85,96C78.24,139.06,64.06,179.07,50.5,208Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nuclear-plant
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nuclear-plant (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nuclear-plant {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nuclear-plant {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nuclear-plant 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nuclear-plant 3s ease-in-out infinite alternate;
}
</style>