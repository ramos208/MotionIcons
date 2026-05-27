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
      <path d="M110 0C49.2 0 0 49.2 0 110 0 133.7 7.6 155.8 20.5 174 7.6 192 0 214.1 0 238 0 291.7 38.9 337.6 91.9 346.4l61.7 10.3c22.2 3.7 38.4 22.9 38.4 45.3 0 25.4-20.6 46-46 46l-98 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l98 0c60.7 0 110-49.2 110-110 0-23.7-7.6-45.9-20.5-64 12.9-18 20.5-40.1 20.5-64 0-53.8-38.9-99.6-91.9-108.5l-61.7-10.3C80.2 151.6 64 132.4 64 110 64 84.6 84.6 64 110 64l98 0c17.7 0 32-14.3 32-32S225.7 0 208 0L110 0zm74.7 299.1c-6.5-2.4-13.4-4.3-20.5-5.5l-61.7-10.3c-22.2-3.7-38.4-22.9-38.4-45.3 0-9.2 2.7-17.8 7.4-25 6.5 2.4 13.4 4.3 20.5 5.5l61.7 10.3c22.2 3.7 38.4 22.9 38.4 45.3 0 9.2-2.7 17.8-7.4 25z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: section
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for section (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-section {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-section {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-section 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-section 3s ease-in-out infinite alternate;
}
</style>