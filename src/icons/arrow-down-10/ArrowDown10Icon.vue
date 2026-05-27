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
      class="icon-geometry anim-gentle-rotation"
    >
      <path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M17 10V4h-2"/><path d="M15 10h4"/><rect x="15" y="14" width="4" height="6" ry="2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-down-10
// Category: directional
// Physics Presets: The animation begins with a gentle rotation and scale increase to simulate the weight of the icon. Upon hovering, it creates an expansive ripple effect that interacts with particles for a dynamic yet elegant visual experience. When clicked, the motion includes vibrational feedback and an energetic glow effect to highlight its interaction.

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

.anim-gentle-rotation {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-down-10 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1664) rotate(0deg) translate(0px, 0px) skew(-2.4deg); }
  100% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(-2deg); }
}

@keyframes motion-ai-idle-arrow-down-10 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-down-10 1500s cubic-out forwards;
}

.anim-gentle-rotation {
  animation: motion-ai-idle-arrow-down-10 2000s cubic-out infinite alternate;
}
</style>