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
      <path d="M416 0L384 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 100.3c-9.6 5.5-16 15.9-16 27.7l0 32c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l16 0 0 96c0 8.8 7.2 16 16 16l59.5 0c10.4 0 18-9.8 15.5-19.9l-23-92.1 44 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-48 0 0-26.7 53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2l0-84.5c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 56-16 5.3 0-109.3c0-11.8-6.4-22.2-16-27.7L432 16c0-8.8-7.2-16-16-16zM224 208C118 208 32 294 32 400l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-32.5 12.1-62.1 32-84.7l0 196.7 160 0 0-293.1c-20-7.1-41.6-10.9-64-10.9zM280 88a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-rifle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-rifle (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-rifle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-rifle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-rifle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-rifle 3s ease-in-out infinite alternate;
}
</style>