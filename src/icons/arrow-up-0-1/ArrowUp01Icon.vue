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
      class="icon-geometry anim-glow-sparks"
    >
      <path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><rect x="15" y="4" width="4" height="6" ry="2"/><path d="M17 20v-6h-2"/><path d="M15 20h4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-0-1
// Category: directional
// Physics Presets: This motion profile designs a dynamic and energetic pop effect for the arrow-up-0-1 icon, using glow-sparks particles and neonPlasma shader to create a visually engaging interaction.

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

.anim-glow-sparks {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-up-0-1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(432deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(360deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-0-1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-0-1 1000s cubic-out forwards;
}

.anim-glow-sparks {
  animation: motion-ai-idle-arrow-up-0-1 2000s cubic-out infinite alternate;
}
</style>