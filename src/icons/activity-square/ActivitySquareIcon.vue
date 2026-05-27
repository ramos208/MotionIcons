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
      class="icon-geometry anim-subtle-drift"
    >
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: activity-square
// Category: generic
// Physics Presets: The motion is designed to mimic a physical system that has both elasticity and damping, creating a smooth yet lively interaction with the icon when hovered over and clicked.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-activity-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1556000000000002) rotate(216deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.07) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-activity-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-activity-square 1s in-out-sine forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-activity-square 2s out-cubic infinite alternate;
}
</style>