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
      <path d="M479.5 224C471.2 98.9 367.2 0 240 0 107.5 0 0 107.5 0 240l0 56.3C0 344.8 39.2 384 87.7 384l127.3 0 128.6 121.4c4.5 4.2 10.4 6.6 16.5 6.6l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.5 0-1.5-1.5 0-174.5 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-.5 0zM320 417.2l-78-73.7 32.4-55.5 45.6 0 0 129.2zM285.3 103.1l34.7 52 0-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52 0 43.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: helmet-un
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for helmet-un (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-helmet-un {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-helmet-un {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-helmet-un 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-helmet-un 3s ease-in-out infinite alternate;
}
</style>