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
      <path d="M144 0c13.3 0 24 10.7 24 24l0 41.5c7.9-1 15.9-1.5 24-1.5s16.1 .5 24 1.5L216 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 54c58.9 23.8 103.2 76 116.2 139.7 3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.7-33.2-26.4-61.8-53.4-80.2l0 81.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-101.8c-7.8-1.5-15.8-2.2-24-2.2s-16.2 .8-24 2.2L168 232c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-81.8c-33.8 23-56 61.9-56 105.8 0 70.7 57.3 128 128 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l16.9 0C18.5 350 0 305.2 0 256 0 175.4 49.6 106.4 120 78l0-54c0-13.3 10.7-24 24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lari-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lari-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lari-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lari-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lari-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lari-sign 3s ease-in-out infinite alternate;
}
</style>