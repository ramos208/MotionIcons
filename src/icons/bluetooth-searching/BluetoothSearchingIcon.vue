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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17"/><path d="M20.83 14.83a4 4 0 0 0 0-5.66"/><path d="M18 12h.01"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bluetooth-searching
// Category: search
// Physics Presets: The motion is designed to simulate the search functionality of a Bluetooth icon, with an elastic-pop effect that emphasizes smooth transitions and visual engagement.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bluetooth-searching {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bluetooth-searching {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bluetooth-searching 250s easeOutElastic forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-bluetooth-searching 2000s easeOutCubic infinite alternate;
}
</style>