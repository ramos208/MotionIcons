<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
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
      <path d="M401.6 0c61.3 0 110.4 50.3 110.4 111 0 29.4-11.6 57.9-32.6 78.8l-8.8 8.8c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.2l8.8-8.8c8.8-8.8 13.8-21 13.8-33.6 0-25.9-21.1-47-46.4-47-22.5 0-41.7 16.1-45.7 38.2L287.5 485.6c0 .1-.1 .3-.1 .4-.2 .8-.3 1.6-.5 2.3-.1 .3-.1 .5-.2 .7-.2 .6-.4 1.3-.7 1.9-.2 .5-.4 1-.6 1.5-.1 .3-.3 .6-.4 .9-1.6 3.5-3.8 6.5-6.4 9.2-2 2-4.2 3.7-6.6 5.1-.2 .1-.3 .2-.5 .3-.7 .4-1.4 .7-2.1 1-.3 .1-.6 .3-.9 .4-.5 .2-1 .4-1.5 .6-.6 .2-1.2 .5-1.9 .7-.2 .1-.5 .2-.7 .2-.8 .2-1.6 .4-2.3 .5-.2 0-.3 .1-.4 .1-.2 0-.4 0-.6 .1-.7 .1-1.3 .2-2 .2-.4 0-.8 .1-1.2 .1-.6 0-1.2 .1-1.8 .1-.6 0-1.2 0-1.8-.1-.4 0-.8-.1-1.2-.1-.7-.1-1.4-.1-2-.2-.2 0-.4 0-.6-.1-.2 0-.3-.1-.5-.1-.8-.2-1.6-.3-2.3-.5-.3-.1-.5-.1-.8-.2-.6-.2-1.3-.4-1.9-.7-.5-.2-1-.4-1.5-.6-.3-.1-.6-.3-.9-.4-.7-.3-1.4-.7-2.1-1-.2-.1-.3-.2-.5-.3-2.4-1.4-4.7-3.1-6.6-5.1-2.6-2.6-4.8-5.7-6.4-9.2-.1-.2-.2-.3-.2-.5l-.5-1.1c-.1-.3-.2-.5-.3-.8-.2-.6-.5-1.2-.7-1.9-.1-.2-.2-.5-.2-.7-.2-.8-.4-1.6-.5-2.3 0-.1-.1-.3-.1-.4L156 102.2c-4-22.1-23.2-38.2-45.7-38.2-25.3 0-46.4 21.1-46.4 47 0 12.6 5 24.8 13.8 33.6l8.8 8.8c12.5 12.5 12.5 32.8 0 45.2s-32.8 12.5-45.2 0l-8.8-8.8C11.6 168.9 0 140.3 0 111 0 50.3 49.1 0 110.4 0 163.8 0 209.6 38.3 219 91l37 207 37-207c9.4-52.6 55.2-91 108.7-91z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aries
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aries (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aries {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aries {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aries 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aries 3s ease-in-out infinite alternate;
}
</style>