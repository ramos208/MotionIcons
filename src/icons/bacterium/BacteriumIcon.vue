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
      <path d="M408 16c0-13.3-10.7-24-24-24S360 2.7 360 16l0 23.4c-13.9 5.3-26.9 13.5-38.2 24.5L305 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l16.8 16.8-30.1 30.1-16.8-16.8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l16.8 16.8c-10 10-20 20-30.1 30.1L177 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l16.8 16.8-30.1 30.1-16.8-16.8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l16.8 16.8c-11 11.3-19.2 24.3-24.5 38.2L48 328c-13.3 0-24 10.7-24 24s10.7 24 24 24l16.3 0c1.3 18.3 7.1 36.4 17.4 52.4L71 439c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l10.6-10.6c16 10.3 34.1 16.1 52.4 17.4l0 16.3c0 13.3 10.7 24 24 24s24-10.7 24-24l0-23.4c13.9-5.3 26.9-13.5 38.2-24.5L271 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-16.8-16.8 30.1-30.1 16.8 16.8c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-16.8-16.8c10-10 20-20 30.1-30.1L399 337c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-16.8-16.8 30.1-30.1 16.8 16.8c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-16.8-16.8c11-11.3 19.2-24.3 24.5-38.2l23.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16.3 0c-1.3-18.3-7.1-36.4-17.4-52.4L505 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L460.4 49.7c-16-10.3-34.1-16.1-52.4-17.4L408 16zM160 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM272 240a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bacterium
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bacterium (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bacterium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bacterium {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bacterium 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bacterium 3s ease-in-out infinite alternate;
}
</style>