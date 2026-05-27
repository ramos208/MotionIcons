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
      <path d="M415.9 311.9l-27.8 48.1 55.7 0-27.8-48.1zM383.6 256l-60.2-104-134.8 0-60.2 104 60.2 104 134.8 0 60.2-104zm64.7 0l58.4 100.9c3.5 6 5.3 12.8 5.3 19.7 0 21.7-17.6 39.4-39.4 39.4l-117 0-61.3 105.8C286.5 535.6 271.8 544 256 544s-30.5-8.4-38.4-22.2l-61.3-105.8-117 0c-21.7 0-39.4-17.6-39.4-39.4 0-6.9 1.8-13.7 5.3-19.7L63.7 256 5.3 155.1C1.8 149.1 0 142.3 0 135.4 0 113.6 17.6 96 39.4 96l117 0 61.3-105.8C225.5-23.6 240.2-32 256-32s30.5 8.4 38.4 22.2l61.3 105.8 117 0c21.7 0 39.4 17.6 39.4 39.4 0 6.9-1.8 13.7-5.3 19.7L448.3 256zM388.1 152l27.8 48.1 27.8-48.1-55.7 0zM291 96l-35-60.4-35 60.4 70 0zM123.9 152l-55.7 0 27.8 48.1 27.8-48.1zM96.1 311.9l-27.8 48.1 55.7 0-27.8-48.1zM221 416l35 60.4 35-60.4-70 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: star-of-david
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for star-of-david (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-star-of-david {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-star-of-david {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-star-of-david 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-star-of-david 3s ease-in-out infinite alternate;
}
</style>