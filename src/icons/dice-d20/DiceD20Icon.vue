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
      <path d="M224.4-8.2c19.6-11.1 43.6-11.1 63.1 0l192 108.8c20 11.4 32.4 32.6 32.4 55.7l0 215.6c0 23-12.4 44.3-32.4 55.7l-192 108.8c-19.6 11.1-43.6 11.1-63.1 0L32.4 427.5C12.4 416.1 0 394.8 0 371.8L0 156.2c0-23 12.4-44.3 32.4-55.7L224.4-8.2zm52 73.2C267 49.8 245 49.8 235.6 65l-76.6 123.7-85.4-46.3-3.8-1.6c-8.9-2.7-18.8 1.1-23.4 9.6s-2.4 18.9 4.7 24.8l3.3 2.3 83.4 45.2-74.6 120.6C55.3 356.2 61 373 75 378.4l161 61.9 0 39.7c0 11 9 20 20 20s20-9 20-20l0-39.7 161-61.9c14-5.4 19.7-22.2 11.8-35l-74.7-120.6 83.4-45.2c9.7-5.3 13.3-17.4 8.1-27.1s-17.4-13.3-27.1-8.1L353 188.7 276.4 65zm-47 329.9l-122-46.9 54.5-88.1 67.5 135zM404.6 348l-122 46.9 67.5-135 54.5 88.1zM319.3 232L256 358.6 192.7 232 319.3 232zM308 192l-104.1 0 52-84 52 84z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dice-d20
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dice-d20 (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dice-d20 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dice-d20 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dice-d20 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dice-d20 3s ease-in-out infinite alternate;
}
</style>