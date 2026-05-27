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
      <path d="M256 224l0 192 64 0 0-192-64 0zm256-79c-46.7 5.8-85.6 36.8-102.7 79l-25.3 0 0 90.8c-10.1 15.2-16 33.4-16 53.1l0 96c0 5.5 .5 10.9 1.3 16.1L128 480c-35.3 0-64-28.7-64-64L64 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 49zM128 224l0 192 64 0 0-192-64 0zm432 48c-.1-17.6-14.4-31.9-32-31.9-17.7 0-32 14.3-32 32l0 47.9 96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-96c0-20.9 13.4-38.7 32-45.3l0-50.6c0-44.2 35.8-80 80-80 44.2 0 79.9 35.8 80 79.9l-48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: table-cells-row-unlock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for table-cells-row-unlock (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-table-cells-row-unlock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-table-cells-row-unlock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-table-cells-row-unlock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-table-cells-row-unlock 3s ease-in-out infinite alternate;
}
</style>