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
      <path d="M224.4 8.3C244-2.8 268-2.8 287.6 8.3l176 99.7c20 11.4 32.4 32.6 32.4 55.7l0 197.4c0 23-12.4 44.3-32.4 55.7l-176 99.7c-19.6 11.1-43.6 11.1-63.1 0l-176-99.7C28.4 405.5 16 384.2 16 361.2l0-197.4c0-23 12.4-44.3 32.4-55.7l176-99.7zM102.6 155.6c-8.8-3.1-18.8 .3-23.8 8.6s-3.2 18.7 3.6 25l3.2 2.4 150.2 90.2 0 148.7c0 11 9 20 20 20 11 0 20-9 20-20l0-148.7 150.3-90.2c9.5-5.7 12.6-18 6.9-27.4s-18-12.5-27.4-6.9l-149.7 89.8-149.7-89.8-3.7-1.7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dice-d6
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dice-d6 (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dice-d6 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dice-d6 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dice-d6 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dice-d6 3s ease-in-out infinite alternate;
}
</style>