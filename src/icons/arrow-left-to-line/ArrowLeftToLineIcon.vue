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
      class="icon-geometry anim-null"
    >
      <path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-left-to-line
// Category: directional
// Physics Presets: This motion design emphasizes a dynamic and engaging pop effect, combining inertia for smooth movement with subtle elasticity to create a realistic hover sensation. The ripple animation further enhances the click experience, while the neon plasma shader adds visual depth.

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

.anim-null {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-left-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.296) rotate(0deg) translate(-4.5px, -4.5px) skew(0deg); }
  100% { transform: scale(1.2) rotate(0deg) translate(-3px, -3px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-left-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-left-to-line 500s cubic-in forwards;
}

.anim-null {
  animation: motion-ai-idle-arrow-left-to-line 500s cubic-out infinite alternate;
}
</style>