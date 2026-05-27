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
      <path d="M64 24C64 10.7 74.7 0 88 0s24 10.7 24 24l0 40 32 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 41.1c54.3 7.8 96 54.4 96 110.9 0 24.2-7.7 46.6-20.7 64.9 31.7 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112l-16 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-32 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-22.3 0C18.7 448 0 429.3 0 406.3L0 101.6C0 80.8 16.8 64 37.6 64L64 64 64 24zm0 200l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-112 0 0 96zm112 64l-112 0 0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitcoin-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bitcoin-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bitcoin-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bitcoin-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitcoin-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bitcoin-sign 3s ease-in-out infinite alternate;
}
</style>