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
      <rect width="10" height="6" x="7" y="9" rx="2"/><path d="M22 20H2"/><path d="M22 4H2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-vertical-space-around
// Category: generic
// Physics Presets: This motion profile is designed to give the 'align-vertical-space-around' icon a lively and energetic feel, emphasizing its semantic meaning through subtle elastic movements during idle state, engaging hover interaction with a vibrant spark effect, and maintaining a cohesive visual identity through consistent shader application. The physics parameters ensure that the icon's motion feels natural and responsive while adhering to physical simulation principles.

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

@keyframes motion-ai-align-vertical-space-around {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(-4.5px, -4.5px) skew(-24deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(-3px, -3px) skew(-20deg); }
}

@keyframes motion-ai-idle-align-vertical-space-around {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-vertical-space-around 0.5s cubic-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-align-vertical-space-around 2s cubic-out infinite alternate;
}
</style>