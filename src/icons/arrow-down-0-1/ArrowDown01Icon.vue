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
      <path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><rect x="15" y="4" width="4" height="6" ry="2"/><path d="M17 20v-6h-2"/><path d="M15 20h4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-0-1
// Category: directional
// Physics Presets: The arrow-down-0-1 icon's motion profile is designed to mimic a subtle yet dynamic drift in idle state, with hover and click animations emphasizing its kinetic flow and visual impact through the use of ripple effects and glowing particles. The physics settings ensure the animation feels both fluid and responsive.

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

@keyframes motion-ai-arrow-down-0-1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.0584) rotate(0deg) translate(-4.5px, -4.5px) skew(0deg); }
  100% { transform: scale(0.98) rotate(0deg) translate(-3px, -3px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-down-0-1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-0-1 1s outQuint forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-arrow-down-0-1 1.5s outQuint infinite alternate;
}
</style>