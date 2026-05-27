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
      class="icon-geometry anim-archive-x-idle"
    >
      <rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="m9.5 17 5-5"/><path d="m9.5 12 5 5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: archive-x
// Category: generic
// Physics Presets: The icon's motion design is characterized by a smooth and elastic transition, with slight vibrations upon hover for emphasis. The animation emphasizes the 'archive' concept through subtle pulsing effects.

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

.anim-archive-x-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-archive-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, -3px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, -2px) skew(0deg); }
}

@keyframes motion-ai-idle-archive-x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-archive-x 300s ease-in-out forwards;
}

.anim-archive-x-idle {
  animation: motion-ai-idle-archive-x 400s ease-in-out infinite alternate;
}
</style>