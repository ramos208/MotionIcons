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
      <path d="M96 32C60.7 32 32 60.7 32 96l0 32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l0 48c0 21.1 13.7 39.1 32.6 45.5-.4 3.4-.6 7-.6 10.5 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8l144.7 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8l.4 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-24.7 0-1.7-4.2-43.8-106.3c-12.3-30-41.6-49.5-74-49.5l-40.4 0C364.4 44.9 343.7 32 320 32L96 32zM384 224l0-96 31.9 0c6.5 0 12.3 3.9 14.8 9.9l35.4 86.1-82.1 0zM152 352a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm280 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM256.6 132.9l27.4 41 0-29.9c0-11 9-20 20-20s20 9 20 20l0 96c0 8.8-5.8 16.6-14.2 19.1s-17.5-.7-22.4-8l-27.4-41 0 29.9c0 11-9 20-20 20s-20-9-20-20l0-96c0-8.8 5.8-16.6 14.2-19.1s17.5 .7 22.4 8zM132 144l0 64c0 6.6 5.4 12 12 12s12-5.4 12-12l0-64c0-11 9-20 20-20s20 9 20 20l0 64c0 28.7-23.3 52-52 52s-52-23.3-52-52l0-64c0-11 9-20 20-20s20 9 20 20z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: truck-field-un
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for truck-field-un (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-truck-field-un {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-truck-field-un {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-truck-field-un 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-truck-field-un 3s ease-in-out infinite alternate;
}
</style>