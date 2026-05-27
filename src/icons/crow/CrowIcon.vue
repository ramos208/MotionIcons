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
      <path d="M456.5 0c-48.6 0-88 39.4-88 88l0 36-355.2 266.4C-.8 401-3.7 421 6.9 435.2s30.6 17 44.8 6.4l76.8-57.6 131.3 0 46.6 113.1 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-39.1-94.9 40.9 0c1.1 0 2.2 0 3.2 0l46.6 113.2 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-42-102C485.3 354.1 544.5 280 544.5 192l0-72 80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4-7.1-28.5-32.7-48.5-62.1-48.5l-50.1 0C508.2 12.5 483.8 0 456.5 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crow (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crow 3s ease-in-out infinite alternate;
}
</style>