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
      <path d="M480 0c17.7 0 32 14.3 32 32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0 0 288c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM267.5 59.1L400 186.9 400 503.4c-9.4 5.4-20.3 8.6-32 8.6l-256 0c-35.3 0-64-28.7-64-64l0-144-19.9 0C12.6 304 0 291.4 0 275.9 0 268.3 3.1 261 8.6 255.7L212.5 59.1C219.9 52 229.7 48 240 48s20.1 4 27.5 11.1zM204.8 256.8l0 44-44 0c-9.7 0-17.6 7.9-17.6 17.6l0 35.2c0 9.7 7.9 17.6 17.6 17.6l44 0 0 44c0 9.7 7.9 17.6 17.6 17.6l35.2 0c9.7 0 17.6-7.9 17.6-17.6l0-44 44 0c9.7 0 17.6-7.9 17.6-17.6l0-35.2c0-9.7-7.9-17.6-17.6-17.6l-44 0 0-44c0-9.7-7.9-17.6-17.6-17.6l-35.2 0c-9.7 0-17.6 7.9-17.6 17.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: house-medical-flag
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for house-medical-flag (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-house-medical-flag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-house-medical-flag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-house-medical-flag 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-house-medical-flag 3s ease-in-out infinite alternate;
}
</style>