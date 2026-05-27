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
      class="icon-geometry anim-bed-single-idle"
    >
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M3 18h18"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bed-single
// Category: generic
// Physics Presets: The bed-single icon is designed to have a soft, inviting feel with subtle animations that mimic the comfort and relaxation of sleeping in a single bed. The idle animation creates a slight rotation and scale increase to represent the natural movement and warmth associated with being on a bed. The hover animation adds more motion to simulate the gentle sway one might experience when lying down or looking at the icon from an angle. The click animation includes a vibration effect for haptic feedback, enhancing user interaction.

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

.anim-bed-single-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bed-single {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(432deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bed-single {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bed-single 800s easeOutSine forwards;
}

.anim-bed-single-idle {
  animation: motion-ai-idle-bed-single 2000s outElastic infinite alternate;
}
</style>