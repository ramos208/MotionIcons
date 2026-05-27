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
      <path d="M0 32C0 14.3 14.3 0 32 0L48 0c44.2 0 80 35.8 80 80l0 288c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16l-197.5 0c1.8 5 2.7 10.4 2.7 16 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-6 1.1-11.7 3.1-17-38.1-6.2-67.1-39.2-67.1-79L64 80c0-8.8-7.2-16-16-16L32 64C14.3 64 0 49.7 0 32zM176 144c0-26.5 21.5-48 48-48l32 0 0-24c0-30.9 25.1-56 56-56l64 0c30.9 0 56 25.1 56 56l0 24 32 0c26.5 0 48 21.5 48 48l0 144c0 26.5-21.5 48-48 48l-240 0c-26.5 0-48-21.5-48-48l0-144zM384 96l0-24c0-4.4-3.6-8-8-8l-64 0c-4.4 0-8 3.6-8 8l0 24 80 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cart-flatbed-suitcase
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cart-flatbed-suitcase (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cart-flatbed-suitcase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cart-flatbed-suitcase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cart-flatbed-suitcase 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cart-flatbed-suitcase 3s ease-in-out infinite alternate;
}
</style>