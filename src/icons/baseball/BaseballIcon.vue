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
      <path d="M232.4 1.1c-122.2 11.4-219.5 108.7-230.9 230.9 16.2-.1 32-1.8 47.2-5 13-2.7 25.7 5.5 28.4 18.5s-5.5 25.7-18.5 28.4c-18.4 3.9-37.6 6-57.1 6.1 11.4 122.2 108.7 219.5 230.9 230.9 .1-19.5 2.2-38.7 6.1-57.1 2.7-13 15.5-21.3 28.4-18.5s21.3 15.5 18.5 28.4c-3.2 15.2-4.9 31-5 47.2 122.2-11.4 219.5-108.7 230.9-230.9-16.2 .1-32 1.8-47.2 5-13 2.7-25.7-5.5-28.4-18.5s5.5-25.7 18.5-28.4c18.4-3.9 37.6-6 57.1-6.1-11.4-122.2-108.7-219.5-230.9-230.9-.1 19.5-2.2 38.7-6.1 57.1-2.7 13-15.5 21.3-28.4 18.5s-21.3-15.5-18.5-28.4c3.2-15.2 4.9-31 5-47.2zm2.8 151.4c-21.4 32.9-49.5 60.9-82.3 82.3-11.1 7.2-26 4.1-33.2-7s-4.1-26 7-33.2c27.2-17.7 50.5-41 68.3-68.3 7.2-11.1 22.1-14.3 33.2-7s14.3 22.1 7 33.2zM393.1 284.2c7.2 11.1 4.1 26-7 33.2-27.2 17.7-50.5 41-68.3 68.3-7.2 11.1-22.1 14.3-33.2 7s-14.3-22.1-7-33.2c21.4-32.9 49.5-60.9 82.3-82.3 11.1-7.2 26-4.1 33.2 7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baseball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baseball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baseball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baseball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baseball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baseball 3s ease-in-out infinite alternate;
}
</style>