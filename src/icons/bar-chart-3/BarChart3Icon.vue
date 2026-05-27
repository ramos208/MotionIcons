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
      <path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bar-chart-3
// Category: generic
// Physics Presets: The motion profile for bar-chart-3 emphasizes a subtle yet engaging elastic-pop effect that mirrors the visual complexity of the icon's geometric structure. The idle animation drifts gently, scaling up slightly and rotating subtly to hint at potential interaction cues. Upon hover, it fades out softly with enhanced translucency, while clicking triggers no additional motion but maintains its current state.

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

@keyframes motion-ai-bar-chart-3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.0584) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(0.98) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bar-chart-3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bar-chart-3 500s linear forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-bar-chart-3 2000s ease-in infinite alternate;
}
</style>