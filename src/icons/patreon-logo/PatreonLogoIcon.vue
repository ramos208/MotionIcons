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
      <path d="M187.37,32c-18.79-7.68-41.14-9.92-62.93-6.3-23.44,3.9-43.73,14-58.68,29.2-11.12,11.32-24.62,33.35-25.7,74-.7,26.49,4.39,55.44,13.61,77.45S74.61,240,87.52,240c22.94,0,33.23-20.08,43.17-39.5,7-13.6,14.16-27.66,25.55-35.38h0c5.86-4,13.8-7,22.21-10.28,23.86-9.2,53.55-20.66,53.55-61.67C232,65.9,215.73,43.6,187.37,32ZM172.69,139.91c-9.28,3.58-18.05,7-25.43,12-14.78,10-23.3,26.66-30.81,41.33C106.67,212.3,100.05,224,87.52,224c-4.52,0-12.18-7.37-19.09-23.85-8.39-20-13-46.49-12.37-70.83.73-27.66,8.23-50.11,21.11-63.21C95.23,47.74,120.79,40,144.57,40a98.48,98.48,0,0,1,36.74,6.76c13,5.3,34.69,18.38,34.69,46.37C216,123.21,195.93,131,172.69,139.91Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: patreon-logo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for patreon-logo (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-patreon-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-patreon-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-patreon-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-patreon-logo 3s ease-in-out infinite alternate;
}
</style>