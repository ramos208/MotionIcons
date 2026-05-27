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
      <path d="M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12"/><path d="M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04"/><path d="M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393"/><path d="m2 2 20 20"/><path d="M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: beef-off
// Category: generic
// Physics Presets: This motion design emulates a beefy, rounded character with subtle elastic effects and vibrant particles to highlight the icon's robust nature.

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

@keyframes motion-ai-beef-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -4.5px) skew(-12deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -3px) skew(-10deg); }
}

@keyframes motion-ai-idle-beef-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-beef-off 0.5s ease-in-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-beef-off 2.5s ease-out infinite alternate;
}
</style>