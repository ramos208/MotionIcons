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
      <path d="M0 368l0 64c0 26.5 21.5 48 48 48l50 0c40.6 0 80.4-11 115.2-31.9l133.5-80.1-93.3 0-64.9 38.9c-14 8.4-28.9 14.7-44.5 19l0-66.4c9.7-5.6 17.8-13.7 23.4-23.4l198.8 0c67.1 0 127.8-20.6 170.3-70.6 4.6-5.4 4.6-13.3 0-18.8-42.5-50.1-103.2-70.6-170.3-70.6l-198.8 0c-5.6-9.7-13.7-17.8-23.4-23.4l0-66.4c15.6 4.2 30.6 10.6 44.5 19l64.9 38.9 93.3 0-133.5-80.1C178.4 43 138.6 32 98 32L48 32C21.5 32 0 53.5 0 80L0 368zm96 0l0 64-48 0 0-64 48 0zM96 80l0 64-48 0 0-64 48 0zM416 224c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shuttle-space
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shuttle-space (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shuttle-space {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shuttle-space {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shuttle-space 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shuttle-space 3s ease-in-out infinite alternate;
}
</style>