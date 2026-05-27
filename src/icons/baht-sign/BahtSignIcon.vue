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
      <path d="M136 0c-13.3 0-24 10.7-24 24l0 40-74.4 0C16.8 64 0 80.8 0 101.6L0 406.3c0 23 18.7 41.7 41.7 41.7l70.3 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0c61.9 0 112-50.1 112-112 0-40.1-21.1-75.3-52.7-95.1 13.1-18.3 20.7-40.7 20.7-64.9 0-61.9-50.1-112-112-112l-16 0 0-40c0-13.3-10.7-24-24-24zM112 128l0 96-48 0 0-96 48 0zm48 96l0-96 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0zm-48 64l0 96-48 0 0-96 48 0zm48 96l0-96 48 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baht-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baht-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baht-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baht-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baht-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baht-sign 3s ease-in-out infinite alternate;
}
</style>