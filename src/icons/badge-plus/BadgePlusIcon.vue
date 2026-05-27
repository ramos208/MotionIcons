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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: badge-plus
// Category: generic
// Physics Presets: The badge-plus icon motion is designed to highlight its plus sign element with an elastic-pop effect, emphasizing smooth transitions and gentle vibrations during hover and click interactions.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-badge-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1340000000000001) rotate(6deg) translate(-3px, 3px) skew(0deg); }
  100% { transform: scale(1.05) rotate(-5deg) translate(-2px, 2px) skew(0deg); }
}

@keyframes motion-ai-idle-badge-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-badge-plus 0.3s cubic-in-out forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-badge-plus 2s cubic-out infinite alternate;
}
</style>