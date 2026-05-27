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
      <path d="M352 0c17.7 0 32 14.3 32 32 0 57.8-24.4 104.8-57.4 144.5-24.1 28.9-53.8 55.1-83.6 79.5 29.8 24.5 59.5 50.6 83.6 79.5 33 39.6 57.4 86.7 57.4 144.5 0 17.7-14.3 32-32 32s-32-14.3-32-32L64 480c0 17.7-14.3 32-32 32S0 497.7 0 480C0 422.2 24.4 375.2 57.4 335.5 81.5 306.6 111.2 280.5 141 256 111.2 231.5 81.5 205.4 57.4 176.5 24.4 136.8 0 89.8 0 32 0 14.3 14.3 0 32 0S64 14.3 64 32l256 0c0-17.7 14.3-32 32-32zM283.5 384l-182.9 0c-8.2 10.5-15.1 21.1-20.6 32l224.2 0c-5.6-10.9-12.5-21.5-20.6-32zM238 336c-14.3-13-29.8-25.8-46-39-16.2 13.1-31.7 26-46 39l92 0zM100.5 128l182.9 0c8.2-10.5 15.1-21.1 20.6-32L79.9 96c5.6 10.9 12.5 21.5 20.6 32zM146 176c14.3 13 29.8 25.8 46 39 16.2-13.1 31.7-26 46-39l-92 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dna
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dna (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dna 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dna 3s ease-in-out infinite alternate;
}
</style>