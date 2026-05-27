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
      <path d="M206.8 47.8C202.3 58.5 200 70 200 81.6l0 100.4-152 114 0-48c0-13.3-10.7-24-24-24S0 234.7 0 248L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 152 0 0 54.4-66 52.8c-3.8 3-6 7.6-6 12.5l0 24.3c0 8.8 7.2 16 16 16l88 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 88 0c8.8 0 16-7.2 16-16l0-24.3c0-4.9-2.2-9.5-6-12.5l-66-52.8 0-54.4 152 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48-152-114 0-100.4c0-11.6-2.3-23.1-6.8-33.8l-27.1-65C274.4-26.2 265.7-32 256-32s-18.4 5.8-22.2 14.8l-27.1 65z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jet-fighter-up
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jet-fighter-up (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jet-fighter-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-jet-fighter-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jet-fighter-up 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jet-fighter-up 3s ease-in-out infinite alternate;
}
</style>