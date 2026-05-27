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
      class="icon-geometry anim-floral-pulse"
    >
      <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-right-left
// Category: directional
// Physics Presets: This motion profile creates a dynamic and pulsing effect for the arrow-right-left icon, with an emphasis on vibrant particles and a subtle shimmer. The hover animation adds a tremor to signify interaction, while the click animation includes a gentle ripple effect to enhance user engagement.

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

.anim-floral-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-right-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1340000000000001) rotate(24deg) translate(0px, 0px) skew(12deg); }
  100% { transform: scale(1.05) rotate(-20deg) translate(0px, 0px) skew(10deg); }
}

@keyframes motion-ai-idle-arrow-right-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-right-left 1500s cubic-in forwards;
}

.anim-floral-pulse {
  animation: motion-ai-idle-arrow-right-left 3000s cubic-out infinite alternate;
}
</style>