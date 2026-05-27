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
      class="icon-geometry anim-neutral-slide"
    >
      <rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-start-vertical
// Category: generic
// Physics Presets: This motion profile employs a dynamic-pop animation for the align-start-vertical icon, emphasizing elasticity and smooth transitions. The hover state introduces slight rotations and scale changes to enhance user interaction cues, while the click event triggers a pop-up effect with subtle vibrations.

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

.anim-neutral-slide {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-align-start-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1664) rotate(-3.5999999999999996deg) translate(0px, -7.5px) skew(0deg); }
  100% { transform: scale(1.08) rotate(3deg) translate(0px, -5px) skew(0deg); }
}

@keyframes motion-ai-idle-align-start-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, -2px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-start-vertical 300s cubic-in-out forwards;
}

.anim-neutral-slide {
  animation: motion-ai-idle-align-start-vertical 400s cubic-in-out infinite alternate;
}
</style>