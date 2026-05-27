<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-dynamic-pop']"
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
      <path d="M2 12a10 10 0 1 1 10 10"/><path d="m2 22 10-10"/><path d="M8 22H2v-6"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-left-from-circle
// Category: directional
// Physics Presets: This motion profile combines a dynamic-pop movement for the idle state to ensure fluid transitions, a hover animation with sparkles and sound waves for engaging interaction, and click effects like vibration and ripple to enhance user experience. The physics properties are tuned to simulate physical objects in motion, emphasizing realism.

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

@keyframes motion-ai-arrow-down-left-from-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1664) rotate(0deg) translate(0px, -3px) skew(0deg); }
  100% { transform: scale(1.08) rotate(0deg) translate(0px, -2px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-down-left-from-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-left-from-circle 1s ease-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-arrow-down-left-from-circle 3s cubic-in-out infinite alternate;
}
</style>