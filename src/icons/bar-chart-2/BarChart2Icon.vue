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
      class="icon-geometry anim-bar-chart-2-idle"
    >
      <path d="M5 21v-6"/><path d="M12 21V3"/><path d="M19 21V9"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bar-chart-2
// Category: generic
// Physics Presets: The bar-chart-2 icon will exhibit a dynamic yet subtle elastic motion upon hover, with pronounced vibrations and ripples upon click. The particles add visual interest, while the shader enhances the graphical appearance for a futuristic look.

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

.anim-bar-chart-2-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bar-chart-2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1340000000000001) rotate(108deg) translate(0px, 0px) skew(-12deg); }
  100% { transform: scale(1.05) rotate(0deg) translate(0px, 0px) skew(-10deg); }
}

@keyframes motion-ai-idle-bar-chart-2 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bar-chart-2 0.6s easeInBack forwards;
}

.anim-bar-chart-2-idle {
  animation: motion-ai-idle-bar-chart-2 1.2s easeOutQuart infinite alternate;
}
</style>