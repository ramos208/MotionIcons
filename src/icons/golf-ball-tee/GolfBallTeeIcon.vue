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
      <path d="M298.5 384.1c12.1 1.2 21.5 11.5 21.5 23.9s-9.4 22.6-21.5 23.9l-2.5 .1-80 0 0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-80 0c-13.3 0-24-10.7-24-24 0-12.4 9.4-22.6 21.5-23.9l2.5-.1 208 0 2.5 .1zM192 0c106 0 192 86 192 192 0 57.4-25.2 108.8-65.1 144L65.1 336C25.2 300.8 0 249.4 0 192 0 86 86 0 192 0zm32 240c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16zm64-64c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16zm-80-16c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: golf-ball-tee
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for golf-ball-tee (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-golf-ball-tee {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-golf-ball-tee {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-golf-ball-tee 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-golf-ball-tee 3s ease-in-out infinite alternate;
}
</style>