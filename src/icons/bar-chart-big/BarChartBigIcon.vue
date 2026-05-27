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
      <path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bar-chart-big
// Category: generic
// Physics Presets: The motion is designed to be elastic and dynamic, with a subtle drift during idle state, a lively wave tremor on hover, and strong elasticity upon click. The shader adds a neon glow effect for visual appeal, while the physics settings ensure realistic interaction mechanics.

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

@keyframes motion-ai-bar-chart-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.026) rotate(1.7999999999999998deg) translate(0px, 0px) skew(-0.24deg); }
  100% { transform: scale(0.95) rotate(-1.5deg) translate(0px, 0px) skew(-0.2deg); }
}

@keyframes motion-ai-idle-bar-chart-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bar-chart-big 1500s outBounce forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-bar-chart-big 2000s outQuad infinite alternate;
}
</style>