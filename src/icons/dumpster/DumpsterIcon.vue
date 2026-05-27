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
      <path d="M132.3 64L106.7 192 24 192c-13.3 0-24-10.7-24-24l0-4.1c0-2.6 .4-5.1 1.2-7.6L26.5 80.4C29.8 70.6 39 64 49.3 64l83 0zm23.4 128l25.6-128 82.7 0 0 128-108.3 0zM312 64l82.7 0 25.6 128-108.3 0 0-128zm131.7 0l83 0c10.3 0 19.5 6.6 22.8 16.4l25.3 75.9c.8 2.4 1.2 5 1.2 7.6l0 4.1c0 13.3-10.7 24-24 24l-82.7 0-25.6-128zM25.7 240l524.7 0c-.4 2.1-13.3 73.4-38.9 213.7-3 16.3-17.9 27.6-34.4 26.1S448 464.6 448 448l0-16-320 0 0 16c0 16.6-12.6 30.4-29.1 31.9S67.5 470 64.5 453.7C39 313.3 26 242.1 25.7 240z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dumpster
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dumpster (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dumpster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dumpster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dumpster 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dumpster 3s ease-in-out infinite alternate;
}
</style>