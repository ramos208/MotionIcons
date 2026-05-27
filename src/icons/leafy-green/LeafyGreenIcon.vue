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
      <path d="M3.94906 20.051L3 21M3.94906 20.051C5.52151 18.4785 8.07096 18.4785 9.64341 20.051C10.8664 21.274 12.8493 21.274 14.0723 20.051C14.6519 19.4714 14.9559 18.7211 14.9862 17.962C16.0741 18.3212 17.3195 18.0692 18.1849 17.2038C19.1704 16.2184 19.3615 14.7398 18.7589 13.5627C19.2436 13.4195 19.7006 13.1574 20.083 12.775C21.3061 11.552 21.3054 9.56849 20.0824 8.34549C21.2833 7.12081 21.2764 5.15506 20.0608 3.93949C18.8452 2.72392 16.8788 2.71643 15.6541 3.91725C14.4311 2.69425 12.4482 2.69425 11.2252 3.91725C10.8428 4.29961 10.58 4.75625 10.4368 5.24072C9.25978 4.63862 7.78146 4.83012 6.79623 5.81533C5.93105 6.6805 5.67858 7.92572 6.03748 9.0134C5.27852 9.04379 4.5285 9.34841 3.94906 9.92785C2.72604 11.1508 2.72604 13.1337 3.94906 14.3567C5.52151 15.9291 5.52151 18.4785 3.94906 20.051Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 19L15 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: leafy-green
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for leafy-green (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-leafy-green {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-leafy-green {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-leafy-green 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-leafy-green 3s ease-in-out infinite alternate;
}
</style>