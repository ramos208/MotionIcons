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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-z-a
// Category: directional
// Physics Presets: This motion design is tailored to create a dynamic and engaging pop effect for the 'arrow-up-z-a' icon, incorporating subtle vibrations upon hover and click interactions, while using complex particle effects and a futuristic shader.

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

@keyframes motion-ai-arrow-up-z-a {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -3px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -2px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-z-a {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-z-a 0.3s ease-in-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-arrow-up-z-a 1.5s linear infinite alternate;
}
</style>