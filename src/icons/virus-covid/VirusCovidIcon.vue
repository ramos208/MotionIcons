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
      <path d="M192 24c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0 0 33.6c30.7 4.2 58.8 16.3 82.3 34.1L386.1 92 374.8 80.6c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-11.3-11.3-23.8 23.8c17.9 23.5 29.9 51.7 34.1 82.3l33.6 0 0-16c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16-33.6 0c-4.2 30.7-16.3 58.8-34.1 82.3l23.8 23.8 11.3-11.3c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-56.6 56.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l11.3-11.3-23.8-23.8c-23.5 17.9-51.7 29.9-82.3 34.1l0 33.6 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-33.6c-30.7-4.2-58.8-16.3-82.3-34.1l-23.8 23.8 11.3 11.3c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L46.7 408.7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l11.3 11.3 23.8-23.8C97.9 338.8 85.8 310.7 81.6 280l-33.6 0 0 16c0 13.3-10.7 24-24 24S0 309.3 0 296l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24l0 16 33.6 0c4.2-30.7 16.3-58.8 34.1-82.3L92 125.9 80.6 137.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56.6-56.6c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L125.9 92 149.7 115.7c23.5-17.9 51.7-29.9 82.3-34.1l0-33.6-16 0c-13.3 0-24-10.7-24-24zm32 200a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: virus-covid
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for virus-covid (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-virus-covid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-virus-covid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-virus-covid 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-virus-covid 3s ease-in-out infinite alternate;
}
</style>