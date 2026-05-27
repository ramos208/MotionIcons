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
      <path d="M447.6 175c-31.6-74.6-105.5-127-191.6-127-22.1 0-43.4 3.5-63.4 9.8-.4 2-.6 4.1-.6 6.2l0 73.4c0 12.5 10.1 22.6 22.6 22.6 6 0 11.8-2.4 16-6.6l16-16c6-6 14.1-9.4 22.6-9.4l5.5 0c28.5 0 42.8 34.5 22.6 54.6-6 6-14.1 9.4-22.6 9.4l-61.5 0c-8.5 0-16.6 3.4-22.6 9.4l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6l0 42.7c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 32c0 17.7 14.3 32 32 32l2.7 0c8.5 0 16.6-3.4 22.6-9.4l29.3-29.3c6-6 9.4-14.1 9.4-22.6l0-18.7c0-8.8 7.2-16 16-16s16-7.2 16-16l0-34.7c0-8.5-3.4-16.6-9.4-22.6l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l45 0c12.4 0 22.7-7.1 28-17zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: earth-africa
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for earth-africa (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-earth-africa {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-earth-africa {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-earth-africa 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-earth-africa 3s ease-in-out infinite alternate;
}
</style>