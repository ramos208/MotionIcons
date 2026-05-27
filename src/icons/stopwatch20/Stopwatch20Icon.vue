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
      <path d="M168.5 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 25.3c-108 11.9-192 103.5-192 214.7 0 119.3 96.7 216 216 216s216-96.7 216-216c0-39.8-10.8-77.1-29.6-109.2l28.2-28.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-23.4 23.4c-32.9-30.2-75.2-50.3-122-55.5l0-25.3 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm-60 240c0-28.7 23.3-52 52-52s52 23.3 52 52l0 3.8c0 11.7-3.2 23.1-9.3 33l-43.8 71.2 33.1 0c11 0 20 9 20 20s-9 20-20 20l-57.8 0c-14.5 0-26.2-11.7-26.2-26.2 0-4.9 1.3-9.6 3.9-13.8l56.7-92.1c2.2-3.6 3.4-7.8 3.4-12.1l0-3.8c0-6.6-5.4-12-12-12s-12 5.4-12 12c0 11-9 20-20 20s-20-9-20-20zm180-52c28.7 0 52 23.3 52 52l0 96c0 28.7-23.3 52-52 52s-52-23.3-52-52l0-96c0-28.7 23.3-52 52-52zm-12 52l0 96c0 6.6 5.4 12 12 12s12-5.4 12-12l0-96c0-6.6-5.4-12-12-12s-12 5.4-12 12z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stopwatch20
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stopwatch20 (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stopwatch20 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stopwatch20 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stopwatch20 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stopwatch20 3s ease-in-out infinite alternate;
}
</style>