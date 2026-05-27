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
      class="icon-geometry anim-glow-sparks"
    >
      <path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-a-z
// Category: directional
// Physics Presets: This motion profile aims to create a dynamic and energetic experience for the arrow-up-a-z icon, emphasizing its directional flow through subtle particle effects and vibrant shaders. The hover animation introduces a ripple effect with increased scale and rotation, while the click animation enhances the visual impact by adding a pop-out transition.

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

@keyframes motion-ai-arrow-up-a-z {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(432deg) translate(-15px, -37.5px) skew(6deg); }
  100% { transform: scale(1.1) rotate(360deg) translate(-10px, -25px) skew(5deg); }
}

@keyframes motion-ai-idle-arrow-up-a-z {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(-15px, -20px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-a-z 0.8s ease-in forwards;
}

.anim-glow-sparks {
  animation: motion-ai-idle-arrow-up-a-z 1.5s ease-out infinite alternate;
}
</style>