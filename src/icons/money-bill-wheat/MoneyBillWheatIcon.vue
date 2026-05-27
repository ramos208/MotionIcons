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
      <path d="M176-16c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zM56 0l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48C42.7 48 32 37.3 32 24S42.7 0 56 0zM24 72l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 120C10.7 120 0 109.3 0 96S10.7 72 24 72zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 0c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80zM400-16c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 112c8.8 0 16 7.2 16 16 0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 304zM48 416l0 48 48 0c0-26.5-21.5-48-48-48zM96 304l-48 0 0 48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48l48 0 0-48zM416 304c0 26.5 21.5 48 48 48l0-48-48 0zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: money-bill-wheat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for money-bill-wheat (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-money-bill-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-money-bill-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-money-bill-wheat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-money-bill-wheat 3s ease-in-out infinite alternate;
}
</style>