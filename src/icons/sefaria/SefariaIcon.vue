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
      <path d="M19.615 15.412c-.62 2.915-2.733 4.152-7.425 4.152-11.54 0-7.45-9.28-5.84-11.186.678-.85 1.152-1.553 2.874-1.553h3.273c4.567 0 5.437.217 6.582 2.55.617 1.258.975 3.971.536 6.036m1.238-5.79c-.385-2.492-.889-5.202-3.052-6.706-1.31-.911-2.663-.981-4.177-.981-1.026 0-4.666-.041-6.257-.041C5.833 1.893 4.779.618 4.779 0 3.777 1.234 3.001 2.597 3.272 4.245c.244 1.484 1.261 2.433 2.75 2.622C4.338 9.25 2.81 11.994 2.881 14.9c.046 1.83.467 9.1 8.686 9.1h1.497c3.507 0 5.632-2.606 6.25-3.614 1.822-2.963 2.122-7.548 1.537-10.764Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sefaria
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sefaria (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sefaria {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sefaria {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sefaria 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sefaria 3s ease-in-out infinite alternate;
}
</style>