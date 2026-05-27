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
      <path d="M404 0c19.2 0 37.6 7.6 51.1 21.2l35.7 35.7C504.4 70.4 512 88.8 512 108s-7.6 37.6-21.2 51.1L445.9 204 308 66.1 352.9 21.2C366.4 7.6 384.8 0 404 0zM58.9 315.1L274.1 100 412 237.9 196.9 453.1c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4L36.4 353.8c4.1-14.6 11.8-27.9 22.6-38.7zM225.4 80.8L80.8 225.4 11.7 156.3c-15.6-15.6-15.6-40.9 0-56.6l88-88c15.6-15.6 40.9-15.6 56.6 0l5.9 5.9-56.3 56.3c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l56.3-56.3 34.9 34.9zM431.2 286.6l34.9 34.9-56.3 56.3c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l56.3-56.3 5.9 5.9c15.6 15.6 15.6 40.9 0 56.6l-88 88c-15.6 15.6-40.9 15.6-56.6 0l-69.1-69.1 144.6-144.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pen-ruler
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pen-ruler (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pen-ruler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pen-ruler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pen-ruler 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pen-ruler 3s ease-in-out infinite alternate;
}
</style>