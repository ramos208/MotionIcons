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
      <rect width="6" height="16" x="4" y="2" rx="2"/><rect width="6" height="9" x="14" y="9" rx="2"/><path d="M22 22H2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-end-horizontal
// Category: generic
// Physics Presets: This motion profile emulates the elastic pop effect, emphasizing a lively and energetic vibe that's characteristic of the icon. The idle animation introduces a subtle pulse with slight rotation and scale changes to represent fluidity and motion. The hover animation adds dynamic sparks in a targeted way to attract user attention effectively. Click animations are designed for vibration feedback while avoiding unwanted ripple effects.

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

@keyframes motion-ai-align-end-horizontal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(6deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(-5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-end-horizontal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-end-horizontal 2000s ease-in-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-align-end-horizontal 2000s ease-in-out infinite alternate;
}
</style>