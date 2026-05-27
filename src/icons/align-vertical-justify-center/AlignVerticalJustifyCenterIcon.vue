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
      <rect width="14" height="6" x="5" y="16" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 12h20"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-vertical-justify-center
// Category: generic
// Physics Presets: This motion profile uses an elastic-pop effect, creating a dynamic yet gentle motion that emphasizes the vertical and centering aspects of the icon. The particles add to the visual complexity, simulating movement in layers for added depth and realism.

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

@keyframes motion-ai-align-vertical-justify-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1556000000000002) rotate(0deg) translate(7.5px, -7.5px) skew(-2.4deg); }
  100% { transform: scale(1.07) rotate(0deg) translate(5px, -5px) skew(-2deg); }
}

@keyframes motion-ai-idle-align-vertical-justify-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-vertical-justify-center 1500s ease-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-align-vertical-justify-center 2000s ease-in-out infinite alternate;
}
</style>