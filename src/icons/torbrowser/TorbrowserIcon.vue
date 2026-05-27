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
      <path d="M12 21.82v-1.46A8.36 8.36 0 0020.36 12 8.36 8.36 0 0012 3.64V2.18A9.83 9.83 0 0121.82 12 9.83 9.83 0 0112 21.82zm0-5.09A4.74 4.74 0 0016.73 12 4.74 4.74 0 0012 7.27V5.82A6.17 6.17 0 0118.18 12 6.17 6.17 0 0112 18.18zm0-7.27A2.54 2.54 0 0114.55 12 2.54 2.54 0 0112 14.54zM0 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 000 12z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: torbrowser
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for torbrowser (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-torbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-torbrowser {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-torbrowser 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-torbrowser 3s ease-in-out infinite alternate;
}
</style>