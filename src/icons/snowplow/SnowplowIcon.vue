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
      <path d="M128 160l0-96c0-35.3 28.7-64 64-64L296.4 0c24.2 0 46.4 13.7 57.2 35.4l87.6 175.1c4.4 8.9 6.8 18.7 6.8 28.6l0 56.9 80 0 0-80c0-48.6 39.4-88 88-88 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.1 0-40 17.9-40 40l0 208c0 22.1 17.9 40 40 40 13.3 0 24 10.7 24 24s-10.7 24-24 24c-48.6 0-88-39.4-88-88l0-80-63 0c9.5 16.5 15 35.6 15 56 0 61.9-50.1 112-112 112l-224 0c-61.9 0-112-50.1-112-112 0-30.5 12.2-58.2 32-78.4L64 224c0-35.3 28.7-64 64-64zm91.7 34.9l43.6 29.1 113.2 0-80-160-104.4 0 0 108.8 27.7 22.1zM416 400c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l224 0c26.5 0 48-21.5 48-48zm-280 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM232 400a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: snowplow
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for snowplow (fontawesome). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-snowplow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-snowplow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-snowplow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-snowplow 3s ease-in-out infinite alternate;
}
</style>