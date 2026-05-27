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
      <path d="M176 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l152 0 0 48-220.8 0-32.8-39.4C69.9 83.2 63.1 80 56 80L24 80C15.7 80 8 84.3 3.6 91.4s-4.8 15.9-1.1 23.4l48 96C54.6 218.9 62.9 224 72 224l107.8 0 104 143.1c15.1 20.7 39.1 32.9 64.7 32.9l75.5 0c75.1 0 136-60.9 136-136S499.1 128 424 128l-48 0 0-48 152 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L176 32zM376 192l48 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-48 0 0-144zM552 416c-13.3 0-24 10.7-24 24 0 4.4-3.6 8-8 8l-272 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: helicopter
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for helicopter (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-helicopter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-helicopter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-helicopter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-helicopter 3s ease-in-out infinite alternate;
}
</style>