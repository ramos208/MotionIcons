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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.182 2c1.94 .022 3.879 .382 5.818 1.08l.364 .135a23.075 23.075 0 0 1 3.636 1.785c0 5.618 -1.957 10.258 -5.87 13.92c-1.24 1.239 -2.5 2.204 -3.78 2.898l-.35 .182c-1.4 -.703 -2.777 -1.729 -4.13 -3.079c-3.912 -3.663 -5.87 -8.303 -5.87 -13.921c2.545 -1.527 5.09 -2.471 7.636 -2.832l.364 -.048a16.786 16.786 0 0 1 1.818 -.12h.364"/><path d="M2.1 7.07c2.073 6.72 5.373 7.697 9.9 2.93c0 -4 1.357 -6.353 4.07 -7.06l.59 -.11"/><path d="M16.35 18.51s2.65 -5.51 -4.35 -8.51"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-nem
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-nem (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-nem {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-nem {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-nem 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-nem 3s ease-in-out infinite alternate;
}
</style>