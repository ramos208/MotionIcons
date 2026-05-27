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
      <path d="M64 64C64 28.7 92.7 0 128 0L416 0c35.3 0 64 28.7 64 64l0 48-64 0 0-48-288 0 0 192 112 0 0 96-163.2 0C34.4 352 0 317.6 0 275.2 0 264.6 8.6 256 19.2 256L64 256 64 64zM529.9 257.9c9 9 14.1 21.2 14.1 33.9L544 464c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l76.1 0c12.7 0 24.9 5.1 33.9 14.1 20 20 47.9 47.9 83.9 83.9zM416 272c0 8.8 7.2 16 16 16l60.1 0-76.1-76.1 0 60.1z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laptop-file
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laptop-file (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laptop-file {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laptop-file {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laptop-file 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laptop-file 3s ease-in-out infinite alternate;
}
</style>