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
      <path d="M256 51.3L92.8 112.4 247.5 171.1c5.5 2.1 11.5 2.1 17 0L419.2 112.4 256 51.3zM0 129.3c0-20 12.4-37.9 31.1-44.9l208-78c10.9-4.1 22.8-4.1 33.7 0l208 78c18.7 7 31.1 24.9 31.1 44.9l0 36-253.2 96c-1.8 .7-3.8 .7-5.7 0l-253.2-96 0-36zm0 140l0-52.7 236.1 89.6c12.8 4.9 26.9 4.9 39.7 0l236.1-89.6 0 52.7-128 48.6 0 51.3 128-48.6 0 62.2c0 20-12.4 37.9-31.1 44.9l-208 78c-10.9 4.1-22.8 4.1-33.7 0l-208-78C12.4 420.7 0 402.7 0 382.7l0-62.2 128 48.6 0-51.3-128-48.6zM236.1 410.1c12.8 4.9 26.9 4.9 39.7 0l60.1-22.8 0-51.3-77.2 29.3c-1.8 .7-3.8 .7-5.7 0l-77.2-29.3 0 51.3 60.1 22.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kaaba
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kaaba (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kaaba {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kaaba {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kaaba 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kaaba 3s ease-in-out infinite alternate;
}
</style>