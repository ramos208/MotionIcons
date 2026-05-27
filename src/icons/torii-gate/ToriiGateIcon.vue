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
      <path d="M0 96L0 28.5C0 21.6 5.6 16 12.5 16 14.8 16 17 16.6 19 17.8L58 41.2C82.9 56.1 111.3 64 140.3 64l167.4 0c29 0 57.5-7.9 82.3-22.8l39-23.4c1.9-1.2 4.2-1.8 6.4-1.8 6.9 0 12.5 5.6 12.5 12.5L448 96c0 35.3-28.7 64-64 64l0 64 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-192 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-64C28.7 160 0 131.3 0 96zM128 224l64 0 0-64-64 0 0 64zm128 0l64 0 0-64-64 0 0 64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: torii-gate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for torii-gate (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-torii-gate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-torii-gate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-torii-gate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-torii-gate 3s ease-in-out infinite alternate;
}
</style>