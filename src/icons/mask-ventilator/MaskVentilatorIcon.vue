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
      <path d="M152.2 192c-15.4 38.3-24.2 77.2-24.2 108.8 0 13.3 1.5 26.2 4.4 38.7l-17-3.4c-29.9-6-51.4-32.2-51.4-62.8l0-81.3 88.2 0zm32.9-64L64 128c-35.3 0-64 28.7-64 64l0 81.3c0 61 43.1 113.5 102.9 125.5l66.3 13.3c18.7 22.1 42.9 40 70.8 51.8l0-87.8c-10.1-14.2-16-31.3-16-49.7 0-49.5 43-134.4 96-134.4 52.5 0 96 84.9 96 134.4 0 18.4-5.9 35.4-16 49.6l0 87.7c27.6-11.8 51.7-29.6 70.4-51.6l66.7-13.3c59.8-12 102.9-64.5 102.9-125.5l0-81.3c0-35.3-28.7-64-64-64l-121.5 0c-34.8-54.2-82.5-96-134.5-96-52.6 0-100.2 41.8-134.9 96zm302.5 64l88.4 0 0 81.3c0 30.5-21.5 56.8-51.4 62.8l-17 3.4c2.9-12.4 4.5-25.4 4.5-38.7 0-31.6-8.9-70.5-24.4-108.8zM288 320l0 192 64 0 0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mask-ventilator
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mask-ventilator (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mask-ventilator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mask-ventilator {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mask-ventilator 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mask-ventilator 3s ease-in-out infinite alternate;
}
</style>