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
      class="icon-geometry anim-neutral-roll"
    >
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m21 21-9-9"/><path d="M21 15v6h-6"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-right-from-square
// Category: directional
// Physics Presets: This motion profile aims to create a lively and engaging experience for the arrow-down-right-from-square icon by blending subtle rotations with dynamic hover animations, ensuring a visually dynamic and interactive user interface element.

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

.anim-neutral-roll {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-down-right-from-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.296) rotate(324deg) translate(4.5px, -6px) skew(0deg); }
  100% { transform: scale(0.8) rotate(90deg) translate(3px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-down-right-from-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-right-from-square 2s inSine forwards;
}

.anim-neutral-roll {
  animation: motion-ai-idle-arrow-down-right-from-square 5s outQuad infinite alternate;
}
</style>