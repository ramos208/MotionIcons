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
      <path d="M8.16 13.92h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48H12v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48v.48h.48V24H2.4v-.48h-.48v-.48h-.48v-.48H.96v-.48H.48v-.48H0v-.96h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.96Zm-.96 6.72h.48v.48h.48v.48h.48v-.96h-.48v-.48h-.48v-.48H7.2Zm0-2.88H5.76v.48h.48v.48h1.92V16.8h-.48v-.48H7.2ZM24 7.68h-.48V9.6h-.48v.48h-.48v.48h-.48v.48h-.96v.48h-.48V12h-.48v.48h-.48v.48h-.96v4.32h2.4v.48h.48v4.32h-.48v.48h-.48v.96h-.48V24h-.48v-.48h-.48v-.48h-.48v-.48h.48v-.48h.48v-.48h.48v-2.4h-.48v.48h-1.44v.48h-.48v1.44h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48h-.48v-.48H12v-.48h-.48v-.96H12v-.96h.48v-.48h-.96v.48H9.6v-.48h-.48v-.48h-.48v-.48h-.48v-.96h.48v-.48h.48v-.48h.96v-.48h3.36V9.6h.48v-.48h.48v-.48h.48v-.48h.48v-.48h.48V7.2h1.92v-.48h1.44v-.48H24Zm-8.16.96h-.48v.96h.48v.48h.96V9.6h.48v-.96h-.48v-.48h-.96ZM13.92.48h.48V4.8h.48v.48h.48v.96h.48v.96h-.48v.48h-.48v.48h-.48v.48h-.48v.48h-.48v.48H12v-.48h-.48v-.48h-.96v-.48h-.48v-.48H9.6V7.2H6.72v-.48h-.48v-2.4h.48v-.48h.48v-.48h.48v-.48h.48V2.4h.48v-.48h.48v-.48h.48V.96h.48V.48h.96V0h2.88z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ratatui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ratatui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ratatui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ratatui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ratatui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ratatui 3s ease-in-out infinite alternate;
}
</style>