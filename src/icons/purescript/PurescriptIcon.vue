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
      <path d="M19.166 4.6l-1.24 1.24 3.97 3.97-3.97 3.97 1.24 1.24 4.58-4.6a.87.87 0 0 0 0-1.23zM6.955 6.74l1.87 1.75h8.23l-1.87-1.75zm-2.1 2.24l-4.6 4.6a.87.87 0 0 0 0 1.23l4.6 4.59 1.23-1.24-3.97-3.97 3.97-3.97-1.24-1.24zm3.97 2.14l-1.87 1.76h8.23l1.87-1.76zm-1.87 4.39l1.87 1.75h8.23l-1.87-1.75z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: purescript
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for purescript (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-purescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-purescript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-purescript 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-purescript 3s ease-in-out infinite alternate;
}
</style>