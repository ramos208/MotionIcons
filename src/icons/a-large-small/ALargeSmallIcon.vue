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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16"/><path d="M15.697 14h5.606"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: a-large-small
// Category: generic
// Physics Presets: This motion profile utilizes an elastic-pop approach for the a-large-small icon, creating a visually engaging and physically believable animation that emphasizes the complex curves and symmetrical design of the SVG. The idle state is designed to pulse subtly, while the hover effect introduces subtle particle effects to mimic a popping sensation, transitioning smoothly into a click animation with a ripple motion effect. The shader enhances the visual appeal by adding neon plasma-like colors, further emphasizing the icon's large-to-small transformation.

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

@keyframes motion-ai-a-large-small {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-a-large-small {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-a-large-small 500s ease-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-a-large-small 2000s linear infinite alternate;
}
</style>