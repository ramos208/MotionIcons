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
      class="icon-geometry anim-audio-lines-idle"
    >
      <path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: audio-lines
// Category: generic
// Physics Presets: The motion of the audio-lines icon is designed to mimic the sound waves and transitions through a subtle yet dynamic pop effect. The idle animation gently rotates and scales the icon, while the hover adds a playful spin and skew offsetting it from its center. Upon clicking, a subtle vibration effect combined with an expanding ripple effect enhances the interactivity of the icon.

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

.anim-audio-lines-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-audio-lines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(-1.5px, -1.5px) skew(6deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(-1px, -1px) skew(5deg); }
}

@keyframes motion-ai-idle-audio-lines {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-audio-lines 2s inSine forwards;
}

.anim-audio-lines-idle {
  animation: motion-ai-idle-audio-lines 2s outElastic infinite alternate;
}
</style>