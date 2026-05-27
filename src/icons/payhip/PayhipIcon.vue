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
      <path d="M3.695 0A3.696 3.696 0 0 0 0 3.695v12.92A7.384 7.384 0 0 0 7.385 24h12.92A3.696 3.696 0 0 0 24 20.305V0H3.695zm11.653 5.604a3.88 3.88 0 0 1 .166 0 3.88 3.88 0 0 1 2.677 1.132 3.88 3.88 0 0 1 0 5.48l-.36.356c-1.826-1.825-3.648-3.656-5.476-5.482l.358-.354a3.88 3.88 0 0 1 2.635-1.132zm-6.627.125a3.88 3.88 0 0 1 2.566 1c2.068 2.062 4.127 4.133 6.192 6.199l-5.481 5.482-6.19-6.203C3.549 9.7 5.346 5.702 8.722 5.729zm-1.744 1.71a.464.464 0 0 0-.465.465v1.817c0 .256.208.463.465.463h1.816a.464.464 0 0 0 .463-.463l.008-1.817A.464.464 0 0 0 8.8 7.44H6.977z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: payhip
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for payhip (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-payhip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-payhip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-payhip 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-payhip 3s ease-in-out infinite alternate;
}
</style>