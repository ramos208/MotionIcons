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
      <path d="M480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l448 0zM256 32c97.2 0 176 78.8 176 176 0 16.6-2.4 32.7-6.7 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-104.2 0c-11.8 0-22.7-6.5-28.2-16.9s-4.9-23.1 1.6-32.9c11.9-17.8 18.8-39.1 18.8-62.2 0-61.9-50.1-112-112-112S144 146.1 144 208c0 23.1 6.9 44.4 18.8 62.2 6.6 9.8 7.2 22.5 1.6 32.9S148.1 320 136.2 320L32 320c-17.7 0-32-14.3-32-32s14.3-32 32-32l54.8 0c-4.3-15.3-6.8-31.4-6.8-48 0-97.2 78.8-176 176-176z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: libra
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for libra (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-libra {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-libra {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-libra 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-libra 3s ease-in-out infinite alternate;
}
</style>