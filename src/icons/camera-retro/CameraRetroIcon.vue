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
      <path d="M0 416l0-208 136.2 0c13.5-20.2 32-36.8 53.7-48L0 160 0 125.7c0-35.3 28.7-64 64-64l.1 0C65.3 45.1 79.1 32 96 32l32 0c16.9 0 30.7 13.1 31.9 29.7l32.1 0 51.2-23.8c8.4-3.9 17.6-6 26.9-6L448 32c35.3 0 64 28.7 64 64l0 64-190 0c21.7 11.2 40.2 27.8 53.7 48l136.2 0 0 208c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM256 192a96.1 96.1 0 1 0 0 192.1 96.1 96.1 0 1 0 0-192.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: camera-retro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for camera-retro (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-camera-retro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-camera-retro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-camera-retro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-camera-retro 3s ease-in-out infinite alternate;
}
</style>