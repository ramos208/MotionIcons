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
      <path d="M360 0c13.3 0 24 10.7 24 24l0 19c0 40.3 16 79 44.5 107.5l21 21C469 191 480 217.4 480 245l0 19c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-19c0-14.9-5.9-29.1-16.4-39.6l-21-21C357.1 146.9 336 96 336 43l0-19c0-13.3 10.7-24 24-24zM552 288c-13.3 0-24-10.7-24-24l0-19c0-40.3-16-79-44.5-107.5l-21-21C443 97 432 70.6 432 43l0-19c0-13.3 10.7-24 24-24s24 10.7 24 24l0 19c0 14.9 5.9 29.1 16.4 39.6l21 21C554.9 141.1 576 192 576 245l0 19c0 13.3-10.7 24-24 24zM292.7 320c5.6 0 10.7 2.9 13.6 7.6L394.6 471c1.3 2.1 0 4.9-2.4 5.2-16.1 2.5-32.4 3.7-48.7 3.7l-38.1 0c-5.6 0-10.7-2.9-13.6-7.6l-79-128.4c-6-9.8 0-22.6 11.5-23.3 6.7-.4 13.4-.6 20.2-.6l48.3 0zM459.3 465.9c-6.4 1-12.7-1.9-16.1-7.4L374.1 346.1c-6.7-10.9 1.5-24.7 14.2-22.9 1.3 .2 2.6 .4 3.8 .6l136.4 21c27.3 4.2 47.4 27.7 47.4 55.3s-20.1 51.1-47.4 55.3l-69.2 10.6zM138.7 336c6.7-1.5 13.6 1.4 17.2 7.2l68.9 112c6.6 10.7-1.2 24.4-13.8 23.1-13-1.4-25.9-3.5-38.6-6.5L31.2 439.2C12.9 435 0 418.7 0 400s12.9-35 31.2-39.2L138.7 336z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: joint
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for joint (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-joint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-joint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-joint 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-joint 3s ease-in-out infinite alternate;
}
</style>