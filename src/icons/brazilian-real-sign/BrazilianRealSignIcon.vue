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
      <path d="M400 16c17.7 0 32 14.3 32 32l0 16 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48.9 0c-26 0-47.1 21.1-47.1 47.1 0 22.5 15.9 41.8 37.9 46.2l32.8 6.6c51.9 10.4 89.3 56 89.3 109 0 50.6-33.8 93.3-80 106.7l0 20.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.9 0c26 0 47.1-21.1 47.1-47.1 0-22.5-15.9-41.8-37.9-46.2l-32.8-6.6c-51.9-10.4-89.3-56-89.3-109 0-50.6 33.8-93.2 80-106.7L368 48c0-17.7 14.3-32 32-32zM0 64C0 46.3 14.3 32 32 32l80 0c79.5 0 144 64.5 144 144 0 54.3-30 101.5-74.4 126.1l41 136.7c5.1 16.9-4.5 34.8-21.5 39.8s-34.8-4.5-39.8-21.5L120.1 319.8c-2.7 .1-5.4 .2-8.1 .2l-48 0 0 128c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64zM64 256l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brazilian-real-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brazilian-real-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brazilian-real-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brazilian-real-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brazilian-real-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brazilian-real-sign 3s ease-in-out infinite alternate;
}
</style>