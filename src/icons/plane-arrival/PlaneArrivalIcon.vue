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
      <path d="M386.6 193.1L265.9 3.7c-4.8-7.6-12.6-12.8-21.4-14.3l-43.1-7.6c-10.8-1.9-20.2 7.3-18.6 18.1l24 161.6-105-18.5-33.8-61.8C64.5 74.7 58.2 70.2 51.1 69L34 66c-9.8-1.7-18.8 5.9-18.8 15.8l.6 106.3c.2 30.9 22.4 57.3 52.9 62.7l13.5 2.4 0 0 417.6 73.6c30.5 5.4 59.5-15 64.9-45.4s-15-59.5-45.4-64.9L386.6 193.1zM224 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm131.2-15.3a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plane-arrival
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plane-arrival (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plane-arrival {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plane-arrival {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plane-arrival 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plane-arrival 3s ease-in-out infinite alternate;
}
</style>