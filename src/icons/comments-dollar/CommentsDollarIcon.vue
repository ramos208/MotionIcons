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
      <path d="M192 320c106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144c0 39.6 14.3 76.2 38.4 105.6L2.8 316.8C-2.1 326.1-.4 337.5 7 345s18.9 9.2 28.2 4.2L116.8 306c23.1 9 48.5 14 75.2 14zm3.2 48c16.4 81.9 94.7 144 188.8 144 26.7 0 52.1-5 75.2-14l81.6 43.2c9.3 4.9 20.7 3.2 28.2-4.2s9.2-18.9 4.2-28.2l-35.6-67.2c24.1-29.4 38.4-66 38.4-105.6 0-82.4-61.7-151.5-145-170.7-11.5 115.8-115.8 201.2-235.8 202.7zM196 32c11 0 20 9 20 20l0 4 8 0c11 0 20 9 20 20s-9 20-20 20l-47.5 0c-6.9 0-12.5 5.6-12.5 12.5 0 6.1 4.4 11.3 10.4 12.3l41.7 7c25.3 4.2 43.9 26.1 43.9 51.8 0 26.1-19 47.7-44 51.8l0 4.7c0 11-9 20-20 20s-20-9-20-20l0-4-24 0c-11 0-20-9-20-20s9-20 20-20l55.5 0c6.9 0 12.5-5.6 12.5-12.5 0-6.1-4.4-11.3-10.4-12.3l-41.7-7c-25.3-4.2-43.9-26.1-43.9-51.8 0-28.8 23.2-52.2 52-52.5l0-4c0-11 9-20 20-20z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: comments-dollar
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for comments-dollar (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-comments-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-comments-dollar {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-comments-dollar 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-comments-dollar 3s ease-in-out infinite alternate;
}
</style>