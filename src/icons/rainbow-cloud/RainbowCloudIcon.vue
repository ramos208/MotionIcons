<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M200,112a48.18,48.18,0,0,0-44.66,30.4,31,31,0,0,0-3.34-.18c-17.65,0-32,14.76-32,32.89S134.35,208,152,208h48a48,48,0,0,0,0-96Zm0,80H152c-8.82,0-16-7.58-16-16.89s7.18-16.89,16-16.89a15,15,0,0,1,5.78,1.14,8,8,0,0,0,10.87-5.81A32,32,0,1,1,200,192ZM24,160v16a8,8,0,0,1-16,0V160A104,104,0,0,1,184.5,85.44a8,8,0,0,1-11.15,11.47A88,88,0,0,0,24,160Zm32,0v16a8,8,0,0,1-16,0V160a72,72,0,0,1,114.6-58,8,8,0,1,1-9.47,12.89A56,56,0,0,0,56,160Zm61.57-23.35A24,24,0,0,0,88,160v16a8,8,0,0,1-16,0V160a40,40,0,0,1,49.27-38.92,8,8,0,1,1-3.7,15.57Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rainbow-cloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for rainbow-cloud (phosphor). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-rainbow-cloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rainbow-cloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rainbow-cloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rainbow-cloud 3s ease-in-out infinite alternate;
}
</style>