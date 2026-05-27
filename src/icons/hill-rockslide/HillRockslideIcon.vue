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
      <path d="M252.4 103.8l27 48c2.8 5 8.2 8.2 13.9 8.2l53.3 0c5.8 0 11.1-3.1 13.9-8.2l27-48c2.7-4.9 2.7-10.8 0-15.7l-27-48c-2.8-5-8.2-8.2-13.9-8.2l-53.3 0c-5.8 0-11.1 3.1-13.9 8.2l-27 48c-2.7 4.9-2.7 10.8 0 15.7zM68.3 87C43.1 61.8 0 79.7 0 115.3L0 432c0 44.2 35.8 80 80 80l316.7 0c35.6 0 53.5-43.1 28.3-68.3L68.3 87zM504.2 403.6c4.9 2.7 10.8 2.7 15.7 0l48-27c5-2.8 8.2-8.2 8.2-13.9l0-53.3c0-5.8-3.1-11.1-8.2-13.9l-48-27c-4.9-2.7-10.8-2.7-15.7 0l-48 27c-5 2.8-8.2 8.2-8.2 13.9l0 53.3c0 5.8 3.1 11.1 8.2 13.9l48 27zM192 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hill-rockslide
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hill-rockslide (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hill-rockslide {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hill-rockslide {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hill-rockslide 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hill-rockslide 3s ease-in-out infinite alternate;
}
</style>