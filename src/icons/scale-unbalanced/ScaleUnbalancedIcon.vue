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
      <path d="M519.8 62.4c16.8-5.6 25.8-23.7 20.2-40.5S516.3-3.9 499.6 1.6l-113 37.7c-13.9-23.5-39.6-39.3-68.9-39.3-44.2 0-80 35.8-80 80 0 3 .2 5.9 .5 8.8L115.6 129.6c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2l0 326.7c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-294.7c21-9.2 37.2-27 44.2-49l125.9-42zM437.3 288l72.4-124.2 72.4 124.2-144.9 0zm72.4 96c62.9 0 115.2-34 126-78.9 2.6-11-1-22.3-6.7-32.1L533.8 109.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L390.4 273.1c-5.7 9.8-9.3 21.1-6.7 32.1 10.8 44.8 63.1 78.9 126 78.9zM126.8 291.8l72.4 124.2-144.9 0 72.4-124.2zM.9 433.1C11.7 478 64 512 126.8 512s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L150.9 237.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L7.6 401.1c-5.7 9.8-9.3 21.1-6.7 32.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scale-unbalanced
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scale-unbalanced (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scale-unbalanced {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scale-unbalanced {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scale-unbalanced 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scale-unbalanced 3s ease-in-out infinite alternate;
}
</style>