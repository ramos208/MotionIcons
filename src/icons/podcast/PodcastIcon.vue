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
      <path d="M336 359.8c39.1-32.3 64-81.1 64-135.8 0-97.2-78.8-176-176-176S48 126.8 48 224C48 278.7 72.9 327.5 112 359.8 112.4 377.4 115.2 400.2 118.4 421.6 48 383.9 0 309.5 0 224 0 100.3 100.3 0 224 0S448 100.3 448 224c0 85.6-48 159.9-118.5 197.6 3.3-21.4 6-44.2 6.4-61.8zm-14-53.4c-8.3-12.6-19.2-21.6-30.4-27.8-2.1-1.1-4.2-2.2-6.3-3.2 11.7-13.9 18.8-31.9 18.8-51.5 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 19.6 7.1 37.6 18.8 51.5-2.1 1-4.2 2-6.3 3.2-11.2 6.2-22.1 15.2-30.4 27.8-18.8-22.3-30.1-51-30.1-82.4 0-70.7 57.3-128 128-128s128 57.3 128 128c0 31.4-11.3 60.2-30.1 82.4zM224 312c32.9 0 64 8.6 64 43.8 0 33-12.9 104.1-20.6 132.9-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8 0-35.1 31.1-43.8 64-43.8zm0-128a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: podcast
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for podcast (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-podcast {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-podcast {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-podcast 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-podcast 3s ease-in-out infinite alternate;
}
</style>