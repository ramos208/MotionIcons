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
      <path d="M24 3.53l-9.952.078C9.142 3.647 6.994 8.265 0 16.345c1.569.753 3.323 1.24 4.338.119 1.703-1.883 4.275-5.48 7.154-8.346 1.793-1.784 6.01-.865 9.95-1.23 1.351-.125 2.41-2.48 2.558-3.359zm-.147 6.076l-7.326.044c-4.39 0-5.38 2.492-11.91 10.24 1.194.563 3.28.84 3.763.257 1.78-2.158 2.506-3.51 5.36-6.362 1.657-1.658 4.39-.687 7.86-1.01 1.267-.12 2.132-2.449 2.253-3.169z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: resurrectionremixos
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for resurrectionremixos (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-resurrectionremixos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-resurrectionremixos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-resurrectionremixos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-resurrectionremixos 3s ease-in-out infinite alternate;
}
</style>