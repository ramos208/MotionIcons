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
      <path d="M43.9 48C19.7 48 0 67.7 0 91.9L0 420.1c0 24.3 19.7 43.9 43.9 43.9 5.5 0 10.7-1 15.7-2.9 12.9-4.9 103.4-37.1 228.4-37.1s215.5 32.3 228.4 37.1c5 1.9 10.2 2.9 15.7 2.9 24.3 0 43.9-19.7 43.9-43.9l0-328.2c0-24.3-19.7-43.9-43.9-43.9-5.5 0-10.7 1-15.7 2.9-12.9 4.9-103.4 37.1-228.4 37.1S72.5 55.7 59.6 50.9C54.6 49 49.4 48 43.9 48zM72 176a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm264.1-16c7.5 0 14.6 3.6 19.1 9.6L479.7 336.2c5.9 7.9 6.4 18.5 1.3 26.9s-14.8 12.8-24.5 11.1c-45.8-7.8-103.3-14.2-168.4-14.2-65.6 0-123.4 6.5-169.3 14.4-9.8 1.7-19.7-2.9-24.7-11.5s-4.3-19.4 1.9-27.2L165.3 249c4.6-5.7 11.5-9 18.7-9s14.2 3.3 18.7 9l27.5 34.4 86.7-113.9c4.6-6 11.7-9.5 19.2-9.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: panorama
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for panorama (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-panorama {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-panorama {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-panorama 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-panorama 3s ease-in-out infinite alternate;
}
</style>