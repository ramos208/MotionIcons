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
      <path d="M211.75,44.25C195,27.47,170.37,20.79,142.46,25.44c-26.91,4.49-53.87,19.09-75.9,41.12s-36.63,49-41.12,75.9c-4.65,27.91,2,52.51,18.81,69.29C57.54,225.05,75.75,232,96.62,232a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C235.21,85.63,228.53,61,211.75,44.25ZM77.87,77.87C102.56,53.19,133,39.93,159.15,39.93a62.26,62.26,0,0,1,29,6.67A108.48,108.48,0,0,0,157.1,63.54c-19.2,15.16-31.63,36.32-36.94,62.89-9.72,48.58-44.7,65.18-67.48,70.84C28.71,168.76,39.4,116.35,77.87,77.87ZM178.13,178.13c-34.69,34.68-80.71,46.78-110.32,31.27A108.72,108.72,0,0,0,98.9,192.46c19.2-15.16,31.63-36.32,36.94-62.89,9.72-48.58,44.7-65.18,67.48-70.84C227.29,87.24,216.6,139.65,178.13,178.13Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: coffee-bean
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for coffee-bean (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-coffee-bean {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-coffee-bean {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-coffee-bean 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-coffee-bean 3s ease-in-out infinite alternate;
}
</style>