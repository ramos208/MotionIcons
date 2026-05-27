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
      class="icon-geometry anim-annoyed-idle"
    >
      <circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><path d="M8 9h2"/><path d="M14 9h2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: annoyed
// Category: generic
// Physics Presets: The motion profile is designed to reflect the animated and perturbed nature of annoyance, with a focus on creating an elastic pop effect that simulates the sudden bursts of irritation one might experience.

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

.anim-annoyed-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-annoyed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.026) rotate(-12deg) translate(0px, -4.5px) skew(0deg); }
  100% { transform: scale(1.05) rotate(10deg) translate(0px, -3px) skew(0deg); }
}

@keyframes motion-ai-idle-annoyed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-annoyed 0.75s easeInCubic forwards;
}

.anim-annoyed-idle {
  animation: motion-ai-idle-annoyed 2.5s easeOutCubic infinite alternate;
}
</style>