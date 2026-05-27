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
      <path d="M10.85.846A11.138 11.138 0 0 0 0 11.979v.04a11.136 11.136 0 0 0 10.844 11.135h.283a10.983 10.983 0 0 0 4.041-.758.395.395 0 0 0 .256-.369v-5.564a.21.21 0 0 0-.274-.195c-1.202.489-2.215.957-3.96.957a5.222 5.222 0 0 1-5.22-5.22 5.22 5.22 0 0 1 5.22-5.22c1.745 0 2.758.467 3.96.955a.21.21 0 0 0 .274-.193V1.979a.395.395 0 0 0-.256-.37 10.983 10.983 0 0 0-4.037-.763Zm5.863 1.82v18.67a.238.238 0 0 0 .377.19c3.413-2.122 6.91-8.16 6.91-9.52 0-1.36-3.497-7.396-6.91-9.522a.238.238 0 0 0-.377.182Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smart
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smart (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smart 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smart 3s ease-in-out infinite alternate;
}
</style>