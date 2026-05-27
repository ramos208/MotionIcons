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
      <path d="M232 32c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 26.5C88.8 73.9 16 156.4 16 256S88.8 438.1 184 453.5l0 26.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24.6c46.8-3.7 89.1-23.6 121.3-53.9 12.9-12.1 13.4-32.4 1.3-45.2s-32.4-13.4-45.2-1.3c-20.7 19.6-47.6 32.7-77.3 36.2l0-270.1c29.8 3.5 56.6 16.6 77.3 36.2 12.9 12.1 33.1 11.5 45.2-1.3s11.5-33.1-1.3-45.2C321.1 80.2 278.8 60.3 232 56.6L232 32zm-48 91.8l0 264.4C124.3 373.8 80 320.1 80 256s44.3-117.8 104-132.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cedi-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cedi-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cedi-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cedi-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cedi-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cedi-sign 3s ease-in-out infinite alternate;
}
</style>