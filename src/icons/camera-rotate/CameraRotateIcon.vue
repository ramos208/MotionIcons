<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M138.7 96l10.4-31.2C155.6 45.2 173.9 32 194.6 32l122.8 0c20.7 0 39 13.2 45.5 32.8L373.3 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l74.7 0zM96 305.9c0 3.9 1.4 7.7 4 10.6l48 54c6.4 7.2 17.6 7.2 23.9 0l48-54c2.6-2.9 4-6.7 4-10.6l0-1.9c0-8.8-7.2-16-16-16l-24 0c0-39.8 32.2-72 72-72 4.4 0 8.7 .4 12.9 1.2l34.9-39.3c-14.6-6.4-30.8-9.9-47.8-9.9-66.3 0-120 53.7-120 120l-24 0c-8.8 0-16 7.2-16 16l0 1.9zm196-46.5c-2.6 2.9-4 6.7-4 10.6l0 1.9c0 8.8 7.2 16 16 16l24 0c0 39.8-32.2 72-72 72-4.4 0-8.7-.4-12.9-1.2l-34.9 39.3c14.7 6.4 30.8 9.9 47.8 9.9 66.3 0 120-53.7 120-120l24 0c8.8 0 16-7.2 16-16l0-1.9c0-3.9-1.4-7.7-4-10.6l-48-54c-6.4-7.2-17.6-7.2-23.9 0l-48 54z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: camera-rotate
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for camera-rotate (fontawesome). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-camera-rotate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-camera-rotate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-camera-rotate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-camera-rotate 4s linear infinite alternate;
}
</style>