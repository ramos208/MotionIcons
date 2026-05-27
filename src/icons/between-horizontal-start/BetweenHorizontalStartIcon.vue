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
      class="icon-geometry anim-gentle-wave"
    >
      <rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: between-horizontal-start
// Category: generic
// Physics Presets: The motion is designed to mimic the look and feel of a simple elastic band, with gentle waves that settle into place during idle animation, a fluid zoom-in effect on hover, and a vibrant visual reaction upon click. The particles simulate a subtle ripple effect, enhancing the icon's interaction dynamics.

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

.anim-gentle-wave {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-between-horizontal-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(-75px, -75px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(-50px, -50px) skew(0deg); }
}

@keyframes motion-ai-idle-between-horizontal-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-between-horizontal-start 800s cubic-out forwards;
}

.anim-gentle-wave {
  animation: motion-ai-idle-between-horizontal-start 2000s cubic-out infinite alternate;
}
</style>