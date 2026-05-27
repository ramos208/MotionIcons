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
      <path d="M64 64C28.7 64 0 92.7 0 128L0 336c0 35.3 28.7 64 64 64l.4 0c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80l104.7 0c4 44.9 41.7 80 87.6 80 46.1 0 83.9-35.4 87.7-80.5 31.7-3.8 56.3-30.8 56.3-63.5l0-101.3c0-13.8-4.5-27.3-12.8-38.4l-80-106.7C471.1 73.5 452.1 64 432 64L64 64zM504 224l-120 0 0-96 48 0 72 96zM64 224l0-96 96 0 0 96-96 0zm160 0l0-96 96 0 0 96-96 0zM392 392a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM152 352a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: van-shuttle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for van-shuttle (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-van-shuttle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-van-shuttle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-van-shuttle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-van-shuttle 3s ease-in-out infinite alternate;
}
</style>