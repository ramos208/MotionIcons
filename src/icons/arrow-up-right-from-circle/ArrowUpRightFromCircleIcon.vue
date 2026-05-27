<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-right-from-circle
// Category: directional
// Physics Presets: The idle animation maintains a mechanical, smooth rotation to simulate gears turning smoothly. The hover effect adds dynamic sparks to mimic an activated switch or button's response. Clicking triggers vibrations and creates a neon plasma-like glow effect around the arrow, enhancing the sense of direction and interaction.

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

@keyframes motion-ai-arrow-up-right-from-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(7.5px, -7.5px) skew(3.5999999999999996deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(5px, -5px) skew(3deg); }
}

@keyframes motion-ai-idle-arrow-up-right-from-circle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-right-from-circle 1s ease-in-out forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-arrow-up-right-from-circle 2s ease-in-out infinite alternate;
}
</style>