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
      <path d="M184.6 411.5c-3.1 7.3-5.4 14.9-6.8 22.6-14.5 8.8-31.5 13.9-49.8 13.9-53 0-96-43-96-96L32 64C14.3 64 0 49.7 0 32S14.3 0 32 0L224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 255.6-39.4 91.9zM96 64l0 128 64 0 0-128-64 0zM352 0L512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 153.4 91.3 213c2.3 5.4 3.8 11.1 4.4 17l.3 .6-.3 0c.2 1.8 .3 3.6 .3 5.4 0 32.3-26.2 58.6-58.6 58.6l-266.9 0c-32.3 0-58.6-26.2-58.6-58.6 0-1.8 .1-3.6 .3-5.4l-.3 0 .3-.6c.6-5.8 2.1-11.6 4.4-17L320 217.4 320 64c-17.7 0-32-14.3-32-32S302.3 0 320 0l32 0zM453.2 242.6c-3.4-8-5.2-16.5-5.2-25.2l0-153.4-64 0 0 153.4c0 8.7-1.8 17.2-5.2 25.2l-33.2 77.4 140.7 0-33.2-77.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flask-vial
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flask-vial (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flask-vial {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flask-vial {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flask-vial 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flask-vial 3s ease-in-out infinite alternate;
}
</style>