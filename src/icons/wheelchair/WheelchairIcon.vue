<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M136 40a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM117.9 197.6l12.6 63c-38.6 12.4-66.5 48.7-66.5 91.4 0 53 43 96 96 96 35.6 0 66.7-19.4 83.3-48.2 2.3 .1 4.6 .2 7 .2l4.1 0c1 0 2.1 0 3.1 0l55.2 0c-20.4 64.9-81 112-152.7 112-88.4 0-160-71.6-160-160 0-73.8 50-135.9 117.9-154.4zm148.6-28.1l23.7 118.5 60.5 0c33.3 0 63.2 20.7 74.9 51.9l25.5 68 18.7-6.2c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5l-48 16c-16.3 5.4-34-3-40.1-19.1l-36.3-96.9c-2.3-6.2-8.3-10.4-15-10.4l-86.1 0c-.4 0-.8 0-1.3 0l-13.1 0c-30.5 0-56.8-21.5-62.8-51.4L165.3 189.7c-6.4-31.9 18-61.7 50.6-61.7 24.6 0 45.8 17.4 50.6 41.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wheelchair
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for wheelchair (fontawesome). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-wheelchair {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wheelchair {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wheelchair 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-wheelchair 2s ease-in-out infinite alternate;
}
</style>