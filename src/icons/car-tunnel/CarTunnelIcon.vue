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
      <path d="M256 0C114.6 0 0 114.6 0 256L0 448c0 35.3 28.7 64 64 64l42.8 0c-6.6-5.9-10.8-14.4-10.8-24l0-113.1c0-13.5 3.1-26.8 9-38.9l39.7-80.8c9.4-19.1 28.9-31.3 50.2-31.3L317 224c21.3 0 40.8 12.1 50.2 31.3L407 336c5.9 12.1 9 25.4 9 38.9L416 488c0 9.6-4.2 18.1-10.8 24l42.8 0c35.3 0 64-28.7 64-64l0-192C512 114.6 397.4 0 256 0zM362.8 512c-6.6-5.9-10.8-14.4-10.8-24l0-24-192 0 0 24c0 9.6-4.2 18.1-10.8 24l213.7 0zm-175-235.5l-29.3 59.5 194.9 0-29.3-59.5c-1.3-2.7-4.1-4.5-7.2-4.5L195 272c-3 0-5.8 1.7-7.2 4.5zM176 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: car-tunnel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for car-tunnel (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-car-tunnel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-car-tunnel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-car-tunnel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-car-tunnel 3s ease-in-out infinite alternate;
}
</style>