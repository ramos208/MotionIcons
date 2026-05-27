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
      class="icon-geometry anim-badge-x-idle"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: badge-x
// Category: generic
// Physics Presets: The icon badge-x adopts an elastic-pop motion type to highlight its key features while maintaining a visually engaging and interactive experience. The idle animation emphasizes the badge's presence with subtle rotation and scale adjustments, creating a sense of depth and interactivity. Upon hovering, the badge experiences a spring-like expansion that mimics the pop effect of badges, making it stand out more prominently. When interacted with, a gentle vibration is triggered to enhance user experience without being overwhelming.

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

.anim-badge-x-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-badge-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.026) rotate(-24deg) translate(0px, 0px) skew(6deg); }
  100% { transform: scale(0.95) rotate(20deg) translate(0px, 0px) skew(5deg); }
}

@keyframes motion-ai-idle-badge-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-badge-x 1500s ease-out forwards;
}

.anim-badge-x-idle {
  animation: motion-ai-idle-badge-x 1000s ease-in infinite alternate;
}
</style>