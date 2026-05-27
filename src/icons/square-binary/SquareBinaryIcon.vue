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
      <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 4c-24.3 0-44 19.7-44 44l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0zm-4 44c0-2.2 1.8-4 4-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48zm140-44c-11 0-20 9-20 20 0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0zM132 296c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0c-11 0-20 9-20 20zm96 24l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0c-24.3 0-44 19.7-44 44zm44-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48c0-2.2 1.8-4 4-4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: square-binary
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for square-binary (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-square-binary {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-square-binary {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-square-binary 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-square-binary 3s ease-in-out infinite alternate;
}
</style>