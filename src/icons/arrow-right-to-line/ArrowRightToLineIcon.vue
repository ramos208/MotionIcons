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
      <path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-right-to-line
// Category: directional
// Physics Presets: This dynamic-pop motion emphasizes a subtle yet engaging hover effect, followed by a strong click animation with vibrations and a visual glow to highlight the arrow-right-to-line icon.

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

@keyframes motion-ai-arrow-right-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(-3px, -3px) skew(3.5999999999999996deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(-2px, -2px) skew(3deg); }
}

@keyframes motion-ai-idle-arrow-right-to-line {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-right-to-line 400s ease-out forwards;
}

.anim-glow-sparks {
  animation: motion-ai-idle-arrow-right-to-line 300s ease-out infinite alternate;
}
</style>