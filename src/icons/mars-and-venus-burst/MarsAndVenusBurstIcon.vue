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
      <path d="M464-32c0 17.7 14.3 32 32 32l34.7 0-63 63c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176 0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9c81.9-15 144-86.8 144-173.1 0-37-11.4-71.4-31-99.8l63-63 0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-112c0-17.7-14.3-32-32-32L496-64c-17.7 0-32 14.3-32 32zM368 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM190.9-21.9C188.4-28 182.6-32 176-32s-12.4 4-14.9 10.1l-29.4 74-76.2-23.1c-6.3-1.9-13.1 .2-17.2 5.3S33.8 46.5 37 52.2l39.5 69.1-65.6 45.1c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2-5.6 79.4c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L152.1 268c-5.3-19.1-8.1-39.2-8.1-60 0-65.4 28-124.2 72.6-165.1L190.9-21.9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mars-and-venus-burst
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mars-and-venus-burst (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mars-and-venus-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mars-and-venus-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mars-and-venus-burst 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mars-and-venus-burst 3s ease-in-out infinite alternate;
}
</style>