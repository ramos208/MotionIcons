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
      <path d="M368 32c61.9 0 112 50.1 112 112l0 289.7c0 7.9 6.4 14.3 14.3 14.3 3.9 0 7.6-1.6 10.2-4.3l40.1-41.1-9.7-9.7c-6.9-6.9-8.9-17.2-5.2-26.2S542.3 352 552 352l64 0 2.5 .1c12.1 1.2 21.5 11.5 21.5 23.9l0 64-.3 3.6c-1.2 8.2-6.7 15.3-14.5 18.6-9 3.7-19.3 1.6-26.2-5.2l-9.1-9.1-39.6 40.6c-14.7 15.1-34.9 23.6-56 23.6-43.3 0-78.3-35.1-78.3-78.3L416 144c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 304c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-304c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 304c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 94.2 32 80.6 32 64 32 46.3 46.3 32 64 32 91 32 115.3 43.1 132.7 61 152.6 43 179 32 208 32 239.3 32 267.7 44.9 288 65.7 308.3 44.9 336.6 32 368 32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scorpio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scorpio (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scorpio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scorpio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scorpio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scorpio 3s ease-in-out infinite alternate;
}
</style>