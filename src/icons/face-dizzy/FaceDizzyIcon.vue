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
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM134.1 153.9l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0zm192 0l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0zM256 304a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-dizzy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-dizzy (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-dizzy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-dizzy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-dizzy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-dizzy 3s ease-in-out infinite alternate;
}
</style>