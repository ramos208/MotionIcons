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
      <path d="M151.4 13.2c10.2 5.8 14.5 18.4 10 29.3L138.2 98.8c-3.9 9.6-13.7 15.4-24 14.4l-20.2-2C78.7 152.9 78 198.9 91.9 241.1l22.4-2.2c10.3-1 20 4.8 24 14.4l23.2 56.3c4.5 10.9 .2 23.4-10 29.3l-2.9 1.6c-33.6 19.2-81.7 16.2-106.2-21.6-56.3-86.6-56.3-199.1 0-285.7 24.6-37.7 72.7-40.7 106.2-21.6l2.9 1.6zM224 336L193.7 17.5C192.8 8.1 200.2 0 209.6 0l324 0c21.3 0 36.6 20.3 30.8 40.8L553.1 80 440 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l99.4 0-18.3 64-81.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.4 0-27.4 96-256 0zm8 48l240 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm120 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: blender-phone
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for blender-phone (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-blender-phone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-blender-phone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-blender-phone 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-blender-phone 3s ease-in-out infinite alternate;
}
</style>