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
      <path d="M240 96c-88.4 0-160 71.6-160 160 0 71.6 47.1 132.3 112 152.7L192 256c0-13.3 10.7-24 24-24 12.8 0 23.3 10.1 24 22.7 15.5-9.5 33.5-14.7 52.3-14.7l11.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11.8 0c-18.8 0-36.1 10-45.4 26.3-4.5 7.9-6.9 16.8-6.9 25.9l0 75.8c42.5 0 81.1-16.6 109.8-43.6 12.9-12.1 33.1-11.5 45.2 1.3s11.5 33.1-1.3 45.2C353.7 456.8 299.5 480 240 480 116.3 480 16 379.7 16 256S116.3 32 240 32c59.5 0 113.7 23.2 153.7 61.1 12.9 12.1 13.4 32.4 1.3 45.2s-32.4 13.4-45.2 1.3C321.1 112.6 282.5 96 240 96z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cruzeiro-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cruzeiro-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cruzeiro-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cruzeiro-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cruzeiro-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cruzeiro-sign 3s ease-in-out infinite alternate;
}
</style>