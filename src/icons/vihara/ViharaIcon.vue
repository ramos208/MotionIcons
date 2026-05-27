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
      <path d="M273.6-3.2c8.5-6.4 20.3-6.4 28.8 0L443.2 102.4c8.3 6.2 18.4 9.6 28.8 9.6 13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 48 58.7 64 13.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 48 24.4 32 15.6 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l22.1 0 17.9-32 0-48-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l13.3 0 58.7-64 0-48-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24c10.4 0 20.5-3.4 28.8-9.6L273.6-3.2zM128 368l320 0 0-48-320 0 0 48zM384 160l-192 0 0 48 192 0 0-48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vihara
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vihara (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vihara {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vihara {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vihara 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vihara 3s ease-in-out infinite alternate;
}
</style>