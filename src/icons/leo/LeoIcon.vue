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
      <path d="M260 0c72.9 0 132 59.1 132 132l0 5.4-.1 1.4-23.8 270c.4 21.7 18.2 39.2 40 39.2 22.1 0 40-17.9 40-40l0-40c0-17.7 14.3-32 32-32s32 14.3 32 32l0 40c0 57.4-46.6 104-104 104S304 465.4 304 408l0-1.4 .1-1.4 23.9-270.6 0-2.6c0-37.6-30.4-68-68-68s-68 30.4-68 68l0 4c0 3.7 .3 7.3 .8 11l29.7 193.4c.9 6.1 1.4 12.2 1.4 18.4l0 9.2c0 61.9-50.1 112-112 112S0 429.9 0 368 50.1 256 112 256c11.7 0 23 1.8 33.7 5.1L129.6 156.7c-1.1-6.8-1.6-13.8-1.6-20.7l0-4C128 59.1 187.1 0 260 0zM112 320a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: leo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for leo (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-leo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-leo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-leo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-leo 3s ease-in-out infinite alternate;
}
</style>