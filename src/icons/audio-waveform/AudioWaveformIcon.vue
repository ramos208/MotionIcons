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
      class="icon-geometry anim-waveform-idle"
    >
      <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: audio-waveform
// Category: generic
// Physics Presets: The icon's waveform motion is designed to look both mechanical and elastic, simulating the sound waves' oscillatory nature. The idle animation ensures a steady yet subtle movement, while hover introduces dynamic changes with a slight rotational effect to mimic air currents around an audio wave. Click effects include vibration for tactile feedback and visual ripple for added immersion.

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

.anim-waveform-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-audio-waveform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(-24deg) translate(4.5px, -4.5px) skew(0deg); }
  100% { transform: scale(1.1) rotate(20deg) translate(3px, -3px) skew(0deg); }
}

@keyframes motion-ai-idle-audio-waveform {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-audio-waveform 0.5s quadOut forwards;
}

.anim-waveform-idle {
  animation: motion-ai-idle-audio-waveform 1.5s easeOutQuad infinite alternate;
}
</style>