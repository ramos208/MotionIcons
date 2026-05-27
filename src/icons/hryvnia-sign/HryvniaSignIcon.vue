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
      <path d="M336 149.4C336 77 268.5 23.5 198 40.1L93.2 64.9C76 68.9 65.4 86.2 69.4 103.4s21.3 27.9 38.5 23.8l104.8-24.7c30.3-7.1 59.3 15.8 59.3 46.9 0 17.6-9.6 33.8-25 42.3l-.7 .4-222.3 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32.4 0c5.5-13.3 8.4-27.8 8.4-42.6zM360 272L24 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l33.3 0c-6.1 13.4-9.3 28.1-9.3 43.3 0 64.1 56.9 113.4 120.4 104.2l137.9-19.9c17.5-2.5 29.6-18.7 27.1-36.2s-18.8-29.6-36.2-27.1L159.2 404.2c-24.9 3.6-47.2-15.7-47.2-40.9 0-15.1 8.2-28.9 21.4-36.2l13-7.1 213.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hryvnia-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hryvnia-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hryvnia-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hryvnia-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hryvnia-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hryvnia-sign 3s ease-in-out infinite alternate;
}
</style>