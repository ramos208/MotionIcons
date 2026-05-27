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
      <path d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144.1 173.1 .1 1 .1 1.9 .1 2.9l0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64c0-1 0-1.9 .1-2.9-82-15-144.1-86.8-144.1-173.1 0-97.2 78.8-176 176-176S368 78.8 368 176zM357.5 327c14.4-15.8 26.6-33.7 36.1-53.1 16.1 9 34.7 14.1 54.5 14.1 61.9 0 112-50.1 112-112S509.9 64 448 64c-19.8 0-38.3 5.1-54.5 14.1-9.5-19.4-21.6-37.3-36.1-53.1 26.4-15.9 57.4-25 90.5-25 97.2 0 176 78.8 176 176 0 86.3-62.1 158.1-144.1 173.1 .1 .9 .1 1.9 .1 2.9l0 64 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64c0-1 0-1.9 .1-2.9-21.1-3.9-40.9-11.5-58.6-22.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: venus-double
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for venus-double (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-venus-double {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-venus-double {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-venus-double 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-venus-double 3s ease-in-out infinite alternate;
}
</style>