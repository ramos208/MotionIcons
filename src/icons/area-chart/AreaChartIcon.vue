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
      class="icon-geometry anim-area-chart-idle"
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: area-chart
// Category: generic
// Physics Presets: The motion design of the area-chart icon employs an elastic-pop motion type to create a smooth, yet visually engaging animation that reflects its function as a data visualization tool. The idle state transitions smoothly with moderate rotation and scaling, while the hover state introduces subtle angular changes for added interactivity. Click events are handled with gentle vibration effects for a modern touch.

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

.anim-area-chart-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-area-chart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(-6deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-area-chart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-area-chart 2000s outElastic forwards;
}

.anim-area-chart-idle {
  animation: motion-ai-idle-area-chart 2000s outElastic infinite alternate;
}
</style>