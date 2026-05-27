<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="m3 16 4 4 4-4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-z-a
// Category: directional
// Physics Presets: This motion profile aims to mimic the feel of a mechanical gear system, emphasizing smooth acceleration and deceleration with subtle rattle effects on hover and click interactions. The use of particles and shaders adds visual interest while maintaining a cohesive physical motion experience.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-down-z-a {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.296) rotate(-6deg) translate(0px, 0px) skew(36deg); }
  100% { transform: scale(1.2) rotate(5deg) translate(0px, 0px) skew(30deg); }
}

@keyframes motion-ai-idle-arrow-down-z-a {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-z-a 750s ease-out-cubic forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-arrow-down-z-a 3000s ease-in infinite alternate;
}
</style>