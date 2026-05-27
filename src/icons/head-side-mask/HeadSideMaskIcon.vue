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
      <path d="M445.9 193c-.1-.4-.2-.9-.2-1.3-15.7-108.4-108.9-191.7-221.7-191.7-85 0-159 47.4-196.9 117.2L283.3 288 456 288 442.9 336 336 336c-8.8 0-16 7.2-16 16s7.2 16 16 16l98.2 0-8.7 32-89.5 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80.6 0c-6.7 19.1-24.8 32-45.3 32L288 464c-17.7 0-32-14.3-32-32l0-104.5-247.5-165C3 182.1 0 202.7 0 224 0 278 19.1 327.5 50.9 366.2 58.9 375.9 64 387.8 64 400.4L64 464c0 26.5 21.5 48 48 48l127.3 0 .7 0 131.3 0c44.9 0 83.8-31.1 93.6-74.9l33.9-150.3c3.3-14.4-.3-29.5-9.7-41L445.9 193zM288 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: head-side-mask
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for head-side-mask (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-head-side-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-head-side-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-head-side-mask 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-head-side-mask 3s ease-in-out infinite alternate;
}
</style>