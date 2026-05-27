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
      <path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-448 0C14.3 64 0 78.3 0 96L0 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l96 0c14.7 0 27.5-10 31-24.2L217 352 321.4 352c23.7 0 44.8-14.9 52.7-37.2l26.7-74.8 31.1 0c8.5 0 16.6-3.4 22.6-9.4l22.6-22.6 66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8zM321.4 304l-92.5 0 16-64 105 0-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128l384 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gun
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gun (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gun {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gun {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gun 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gun 3s ease-in-out infinite alternate;
}
</style>