<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M279.2 55.7C263.9 22.8 230.6 0 192 0 139 0 96 43 96 96 60.7 96 32 124.7 32 160s28.7 64 64 64l320 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-1.6 0c-7.4-36.5-39.7-64-78.4-64-22.2 0-42.3 9.1-56.8 23.7zM410.6 476.1c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zM100.1 303.6c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64C29 365 35.8 378.6 48.4 382.8s26.2-2.6 30.4-15.2l21.3-64zm120 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64zm112 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64zm120 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-showers-water
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-showers-water (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-showers-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-showers-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-showers-water 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-showers-water 3s ease-in-out infinite alternate;
}
</style>