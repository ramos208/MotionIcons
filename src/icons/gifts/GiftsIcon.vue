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
      <path d="M202-30.6c12.5 4.4 19 18.1 14.6 30.6l-8.2 23.1 25.4-18.5c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5L233.8 64 272 64c26.5 0 48 21.5 48 48l0 2.1c-54.7 10.4-96 58.4-96 116l0 1.9c0 8.9 1 17.5 2.8 25.9-11.9 17.8-18.8 39.1-18.8 62.1l0 128c0 23.8 7.4 45.9 20.1 64L48 512c-26.5 0-48-21.5-48-48L0 112C0 85.5 21.5 64 48 64l38.2 0-28.3-20.6C47.2 35.6 44.8 20.6 52.6 9.9S75.4-3.2 86.1 4.6l27.4 20-8.3-25C101-13 107.8-26.6 120.4-30.8s26.2 2.6 30.4 15.2l9.9 29.8 10.7-30.2c4.4-12.5 18.1-19 30.6-14.6zM489.9 208c-7.5 0-14.5 3.8-18.6 10.1L446.9 256 488 256c13.3 0 24-10.7 24-24l0-1.9c0-12.2-9.9-22.1-22.1-22.1zM385.1 256l-24.4-37.9c-4.1-6.3-11.1-10.1-18.6-10.1-12.2 0-22.1 9.9-22.1 22.1l0 1.9c0 13.3 10.7 24 24 24l41.1 0zM281.9 268.5c-6.3-10.7-9.9-23.2-9.9-36.5l0-1.9c0-38.7 31.4-70.1 70.1-70.1 23.8 0 46 12.1 58.9 32.1l15 23.2 15-23.2c12.9-20 35.1-32.1 58.9-32.1 38.7 0 70.1 31.4 70.1 70.1l0 1.9c0 13.3-3.6 25.8-9.9 36.5 15.7 11.7 25.9 30.4 25.9 51.5l0 128c0 35.3-28.7 64-64 64l-72 0 0-208-48 0 0 208-72 0c-35.3 0-64-28.7-64-64l0-128c0-21.1 10.2-39.8 25.9-51.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gifts
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gifts (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gifts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gifts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gifts 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gifts 3s ease-in-out infinite alternate;
}
</style>