<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-elastic-pop']"
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
      class="icon-geometry anim-bar-chart-4-idle"
    >
      <path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-3"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bar-chart-4
// Category: generic
// Physics Presets: The motion is designed to mimic the smooth and dynamic nature of a bar chart icon, with subtle elastic movements that simulate data transitions and visual feedback upon interaction.

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

.anim-bar-chart-4-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bar-chart-4 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bar-chart-4 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bar-chart-4 500s ease-in-out forwards;
}

.anim-bar-chart-4-idle {
  animation: motion-ai-idle-bar-chart-4 2000s ease-out infinite alternate;
}
</style>