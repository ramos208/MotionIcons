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
      class="icon-geometry anim-glow-spin"
    >
      <path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M17 10V4h-2"/><path d="M15 10h4"/><rect x="15" y="14" width="4" height="6" ry="2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-1-0
// Category: directional
// Physics Presets: This motion design emphasizes a dynamic and popping effect, with the icon gradually spinning to create an engaging hover experience. Upon click, it vibrates for emphasis while maintaining a subtle particle effect.

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

.anim-glow-spin {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-up-1-0 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.62) rotate(-432deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.5) rotate(-360deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-1-0 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.25) rotate(-360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-1-0 2000s cubic-in-out forwards;
}

.anim-glow-spin {
  animation: motion-ai-idle-arrow-up-1-0 4000s cubic-in-out infinite alternate;
}
</style>