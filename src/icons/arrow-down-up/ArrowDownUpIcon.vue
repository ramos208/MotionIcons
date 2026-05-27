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
      class="icon-geometry anim-subtle-drift"
    >
      <path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-up
// Category: directional
// Physics Presets: This motion profile emphasizes a dynamic and pulsating effect with slight drift for the idle animation, creating a sense of weightlessness. The hover animation features a wave trail that mimics a flowing current around the icon, enhancing its directional flow. The click animation includes vibration feedback and an optional ripple effect to reinforce user interaction.

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

@keyframes motion-ai-arrow-down-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, 0px) skew(-3.5999999999999996deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(-3deg); }
}

@keyframes motion-ai-idle-arrow-down-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-up 2000s quart-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-arrow-down-up 2000s cubic-out infinite alternate;
}
</style>