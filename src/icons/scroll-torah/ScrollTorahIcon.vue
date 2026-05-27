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
      <path d="M0 48C0 21.5 21.5 0 48 0 68.9 0 86.7 13.4 93.3 32l389.5 0c6.6-18.6 24.4-32 45.3-32 26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48-20.9 0-38.7-13.4-45.3-32L93.3 480c-6.6 18.6-24.4 32-45.3 32-26.5 0-48-21.5-48-48L0 48zM177.9 301c-1.2 2-1.9 4.2-1.9 6.6 0 6.9 5.6 12.5 12.5 12.5l56.9 0 30.5 49.2c2.6 4.2 7.2 6.8 12.2 6.8s9.6-2.6 12.2-6.8l30.5-49.2 56.9 0c6.9 0 12.5-5.6 12.5-12.5 0-2.3-.6-4.6-1.9-6.6l-27.8-45 27.8-45c1.2-2 1.9-4.2 1.9-6.6 0-6.9-5.6-12.5-12.5-12.5l-56.9 0-30.5-49.2c-2.6-4.2-7.2-6.8-12.2-6.8s-9.6 2.6-12.2 6.8l-30.5 49.2-56.9 0c-6.9 0-12.5 5.6-12.5 12.5 0 2.3 .6 4.6 1.9 6.6l27.8 45-27.8 45z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scroll-torah
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scroll-torah (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scroll-torah {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scroll-torah {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scroll-torah 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scroll-torah 3s ease-in-out infinite alternate;
}
</style>