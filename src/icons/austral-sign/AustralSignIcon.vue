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
      <path d="M266.5 240l-85 0 42.5-106.4 42.5 106.4zm68.9 0L262.9 58.3C256.5 42.4 241.1 32 224 32s-32.5 10.4-38.9 26.3L112.6 240 32 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l61.4 0-19.2 48-42.3 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l23.1 0-20.8 52.1c-6.6 16.4 1.4 35 17.9 41.6s35-1.4 41.6-17.9l30.3-75.9 200 0 30.3 75.9c6.6 16.4 25.2 24.4 41.6 17.9s24.4-25.2 17.9-41.6L392.9 384 416 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-42.3 0-19.2-48 61.4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80.6 0zm-49.7 48l19.2 48-161.6 0 19.2-48 123.3 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: austral-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for austral-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-austral-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-austral-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-austral-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-austral-sign 3s ease-in-out infinite alternate;
}
</style>