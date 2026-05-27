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
      <path d="M18.31 0l-.35.01c-1.55.13-2.46 1.2-2.6 2.28-.15 1.2.65 2.4 2.58 2.28 2.15-.12 3.09-1.2 3.1-2.28.02-1.15-1-2.28-2.73-2.29zM7.21.34A2.66 2.66 0 004.56 2.6C4.41 3.73 5.12 4.87 7 4.85c2.23-.04 3.31-1.37 3.16-2.57-.12-1-1.09-1.92-2.94-1.94zm12.35 8.71a7 7 0 00-.4.02c-5.28.54-5.54.6-15.26.82C-.2 9.9.62 24 9.38 24c8.2 0 18.12-15.15 10.18-14.95zm-1.1 2.7c3.18-.07-2.9 9.53-8.8 9.56-7.46 0-6.44-8.8-5.18-8.85 8.67-.35 10.88-.64 13.98-.71Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smugmug
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smugmug (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smugmug {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smugmug {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smugmug 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smugmug 3s ease-in-out infinite alternate;
}
</style>