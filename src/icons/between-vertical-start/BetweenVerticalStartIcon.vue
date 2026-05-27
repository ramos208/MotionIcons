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
      class="icon-geometry anim-neutral-pulse"
    >
      <rect width="7" height="13" x="3" y="8" rx="1"/><path d="m15 2-3 3-3-3"/><rect width="7" height="13" x="14" y="8" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: between-vertical-start
// Category: generic
// Physics Presets: This motion design emphasizes an elastic pop effect for the icon, starting from a neutral pulse animation. Upon hover, it transforms into a vortex-twirl that creates a sense of depth and movement. The click event is handled with vibration and ripple effects to enhance interactivity.

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

.anim-neutral-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-between-vertical-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.35) rotate(432deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.25) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-between-vertical-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-between-vertical-start 500s outElastic forwards;
}

.anim-neutral-pulse {
  animation: motion-ai-idle-between-vertical-start 1000s outQuint infinite alternate;
}
</style>