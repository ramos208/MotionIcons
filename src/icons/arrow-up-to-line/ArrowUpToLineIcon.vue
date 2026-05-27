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
      <path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-to-line
// Category: directional
// Physics Presets: The motion is designed to be smooth and dynamic, emphasizing the arrow's upward movement with a gentle hover effect followed by a rapid click animation.

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

@keyframes motion-ai-arrow-up-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(0.918) rotate(-36deg) translate(3px, -0.75px) skew(0deg); }
  100% { transform: scale(1.15) rotate(40deg) translate(2px, -0.5px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, -2px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-to-line 500s ease-in-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-arrow-up-to-line 1000s ease-out infinite alternate;
}
</style>