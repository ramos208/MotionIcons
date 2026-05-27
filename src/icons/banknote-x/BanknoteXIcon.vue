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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="m17 17 5 5"/><path d="M18 12h.01"/><path d="m22 17-5 5"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: banknote-x
// Category: generic
// Physics Presets: The icon is designed to mimic the movement of a banknote, starting with an elastic-pop effect that simulates the bill's springiness. Upon hovering, subtle particle effects add a dynamic glow, and upon clicking, a slight vibration ensures user interaction feedback.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-banknote-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(7.5px, 7.5px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(5px, 5px) skew(0deg); }
}

@keyframes motion-ai-idle-banknote-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-banknote-x 1s out-cubic forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-banknote-x 2s linear infinite alternate;
}
</style>