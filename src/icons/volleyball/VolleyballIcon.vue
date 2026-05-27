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
      <path d="M512 258.9c-23.4 8-47.8 13.1-72.6 15.1 5.9-98.6-30.7-191.1-94.9-258.3 97.8 36 167.5 130 167.5 240.3 0 1 0 1.9 0 2.9zm-5.9 52c-5.2 23.7-13.6 46.2-24.9 66.9-94.7 52.2-214 50-308.4-13.6 21.7-31.3 49.8-58.9 83.8-80.5 79.5 41.6 168.5 49.1 249.5 27.1zM279.7 241.6c-3.7-89.7-41.7-170.5-101.3-229.7 22.3-7.1 46-11.2 70.5-11.9 92.5 55.9 150.3 160.3 142.4 273.8-38-3.2-75.9-13.7-111.6-32.3zM130.5 32.8C149.1 49.1 165.8 67.7 179.9 88.2 91.5 132.3 29.7 210.3 3.7 299.5 1.3 285.3 0 270.8 0 256 0 160.2 52.6 76.7 130.5 32.8zm73.4 97c16.3 34.5 26.1 72.6 27.9 112.8-75.8 48-126.8 121.3-148.3 202.5-17.6-16.1-33-34.6-45.5-55 2.1-108.1 63.7-210.4 165.9-260.3zM256 512c-47.7 0-92.3-13-130.5-35.7 4.8-24.3 12.6-48 23.2-70.4 82.4 54.4 180.8 68.9 271 47-44.4 37-101.5 59.2-163.7 59.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: volleyball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for volleyball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-volleyball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-volleyball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-volleyball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-volleyball 3s ease-in-out infinite alternate;
}
</style>