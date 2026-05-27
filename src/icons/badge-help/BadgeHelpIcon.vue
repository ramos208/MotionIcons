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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: badge-help
// Category: generic
// Physics Presets: The motion profile for the badge-help icon is designed to be visually engaging and reflective of its 'help' theme. The idle state drifts subtly, creating a sense of calm and readiness. Upon hovering, there's a momentary burst of energy with a pop effect, which represents alertness or immediate action. When clicked, both a vibration and ripple are implemented to enhance interactivity.

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

@keyframes motion-ai-badge-help {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.296) rotate(0deg) translate(0px, -7.5px) skew(0deg); }
  100% { transform: scale(1.2) rotate(0deg) translate(0px, -5px) skew(0deg); }
}

@keyframes motion-ai-idle-badge-help {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-badge-help 300s spring forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-badge-help 300s linear infinite alternate;
}
</style>