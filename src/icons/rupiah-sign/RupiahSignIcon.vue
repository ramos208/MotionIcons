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
      <path d="M0 64C0 46.3 14.3 32 32 32l80 0c79.5 0 144 64.5 144 144 0 54.3-30 101.5-74.4 126.1l41 136.7c5.1 16.9-4.5 34.8-21.5 39.8s-34.8-4.5-39.8-21.5L120.1 319.8c-2.7 .1-5.4 .2-8.1 .2l-48 0 0 128c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64zM64 256l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160zm256-32l80 0c61.9 0 112 50.1 112 112S461.9 448 400 448l-48 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32zm80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48l-48 0 0 96 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rupiah-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rupiah-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rupiah-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-rupiah-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rupiah-sign 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rupiah-sign 3s ease-in-out infinite alternate;
}
</style>