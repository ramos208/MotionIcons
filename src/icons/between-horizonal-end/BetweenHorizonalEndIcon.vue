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
      <rect width="13" height="7" x="3" y="3" rx="1"/><path d="m22 15-3-3 3-3"/><rect width="13" height="7" x="3" y="14" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: between-horizonal-end
// Category: generic
// Physics Presets: This motion profile is designed to emphasize the elastic and pop characteristics of the icon, creating a visually engaging and interactive experience that reflects its geometric complexity.

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

@keyframes motion-ai-between-horizonal-end {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1664) rotate(0deg) translate(-0.15000000000000002px, -0.15000000000000002px) skew(0deg); }
  100% { transform: scale(1.08) rotate(0deg) translate(-0.1px, -0.1px) skew(0deg); }
}

@keyframes motion-ai-idle-between-horizonal-end {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-between-horizonal-end 0.5s outSine forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-between-horizonal-end 2s outQuad infinite alternate;
}
</style>