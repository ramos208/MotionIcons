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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 9c0 5.523 4.477 10 10 10a9.953 9.953 0 0 0 5.418 -1.593m2.137 -1.855a9.961 9.961 0 0 0 2.445 -6.552"/><path d="M12 19c0 -1.988 .58 -3.84 1.58 -5.397m1.878 -2.167a9.961 9.961 0 0 1 6.542 -2.436"/><path d="M2 9a10 10 0 0 1 10 10"/><path d="M12 4a9.7 9.7 0 0 1 3 7.013"/><path d="M9.01 11.5a9.696 9.696 0 0 1 .163 -2.318m1.082 -2.942a9.696 9.696 0 0 1 1.745 -2.24"/><path d="M3 3l18 18"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plant-2-off
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plant-2-off (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plant-2-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plant-2-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plant-2-off 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plant-2-off 3s ease-in-out infinite alternate;
}
</style>