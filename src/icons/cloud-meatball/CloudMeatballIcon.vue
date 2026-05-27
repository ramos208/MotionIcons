<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M0 224c0 53 43 96 96 96l26.9 0c3.5-12.1 10.1-23.3 19.2-32.4l1.4-1.4c15-15 35.3-22.9 56.1-22.2 14.2-15.1 34.2-23.9 55.4-23.9l2 0c21.1 0 41.1 8.8 55.4 23.9 20.8-.6 41.1 7.3 56.1 22.2l1.4 1.4c9.2 9.2 15.7 20.4 19.2 32.4l26.9 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0 1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28-18.7-35.7-56.1-60-99.2-60-61.9 0-112 50.1-112 112 0 7.1 .7 14.1 1.9 20.8-38.3 12.6-65.9 48.7-65.9 91.2zM156.5 424.3c9.5 6.3 14.2 17.7 11.9 28.8-1.8 9.2 1 18.7 7.7 25.3l1.4 1.4c6.6 6.6 16.1 9.5 25.3 7.7 11.1-2.2 22.5 2.5 28.8 11.9 5.2 7.8 14 12.5 23.3 12.5l2 0c9.4 0 18.1-4.7 23.3-12.5 6.3-9.5 17.7-14.2 28.8-11.9 9.2 1.8 18.7-1 25.3-7.7l1.4-1.4c6.6-6.6 9.5-16.1 7.7-25.3-2.2-11.1 2.5-22.5 11.9-28.8 7.8-5.2 12.5-14 12.5-23.3l0-2c0-9.4-4.7-18.1-12.5-23.3-9.5-6.3-14.2-17.7-11.9-28.8 1.8-9.2-1-18.7-7.7-25.3l-1.4-1.4c-6.6-6.6-16.1-9.5-25.3-7.7-11.1 2.2-22.5-2.5-28.8-11.9-5.2-7.8-14-12.5-23.3-12.5l-2 0c-9.4 0-18.1 4.7-23.3 12.5-6.3 9.5-17.7 14.2-28.8 11.9-9.2-1.8-18.7 1-25.3 7.7l-1.4 1.4c-6.6 6.6-9.5 16.1-7.7 25.3 2.2 11.1-2.5 22.5-11.9 28.8-7.8 5.2-12.5 14-12.5 23.3l0 2c0 9.4 4.7 18.1 12.5 23.3zM48 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm416 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-meatball
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-meatball (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-meatball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-meatball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-meatball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-meatball 3s ease-in-out infinite alternate;
}
</style>