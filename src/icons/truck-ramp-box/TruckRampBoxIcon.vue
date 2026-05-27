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
      <path d="M400 32c-44.2 0-80 35.8-80 80l0 248.2-297.2 89.2C5.9 454.4-3.7 472.3 1.4 489.2s22.9 26.5 39.8 21.5l315.5-94.6 43.7 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88l0-392-176 0zM528 424c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40c22.1 0 39.9 17.9 40 39.9l0 .1zM51.9 149.5C18.1 159.8-.9 195.6 9.4 229.4l28.1 91.8C47.8 355 83.6 374 117.4 363.7l91.8-28.1c33.8-10.3 52.8-46.1 42.5-79.9l-28.1-91.8c-10.3-33.8-46.1-52.8-79.9-42.5L51.9 149.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: truck-ramp-box
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for truck-ramp-box (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-truck-ramp-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-truck-ramp-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-truck-ramp-box 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-truck-ramp-box 3s ease-in-out infinite alternate;
}
</style>