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
      <path d="M464.1 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm8.4-576c15.1 0 29.7 5.8 40.7 16.2l47.2 44.8c12.6 12 19.1 29 17.5 46.3-1.2 13.3-7 25.8-16.5 35.2L363.1 309c-7.3 7.3-15.7 13.4-25 18L206 393c-9.2 4.6-17.7 10.7-25 18l-92 92 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.8-1.7-48-48-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1s22.7-9.3 32.1-1.7l1.8 1.7 92-92c7.3-7.3 13.4-15.7 18-25l66.1-132.1c4.6-9.2 10.7-17.7 18-25L430.8-14.7C441.9-25.8 456.9-32 472.5-32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baseball-bat-ball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baseball-bat-ball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baseball-bat-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baseball-bat-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baseball-bat-ball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baseball-bat-ball 3s ease-in-out infinite alternate;
}
</style>