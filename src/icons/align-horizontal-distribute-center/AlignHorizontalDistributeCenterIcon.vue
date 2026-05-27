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
      <rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M17 22v-5"/><path d="M17 7V2"/><path d="M7 22v-3"/><path d="M7 5V2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-horizontal-distribute-center
// Category: generic
// Physics Presets: This motion profile emphasizes a gentle yet visually engaging transition, using elastic pop to create subtle movement that mimics the natural bounce of an object being pushed gently and then released. The hover effect adds a touch of levity with a floating animation, while clicks are accompanied by a vibrant glow to enhance interaction.

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

@keyframes motion-ai-align-horizontal-distribute-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(7.5px, 7.5px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(5px, 5px) skew(0deg); }
}

@keyframes motion-ai-idle-align-horizontal-distribute-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-horizontal-distribute-center 500s ease-in forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-align-horizontal-distribute-center 2000s outCubic infinite alternate;
}
</style>