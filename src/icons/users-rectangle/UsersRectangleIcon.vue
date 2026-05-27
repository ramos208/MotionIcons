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
      <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm224 72a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm0 152c53 0 96 43 96 96l0 24c0 13.3-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-24c0-53 43-96 96-96zm96-64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 272.3c-15.2 22.8-24 50.2-24 79.7l0 24c0 8.4 1.4 16.5 4.1 24l-46.8 0C89.6 400 80 390.4 80 378.7L80 368c0-50.3 38.7-91.6 88-95.7zM427.9 400c2.7-7.5 4.1-15.6 4.1-24l0-24c0-29.5-8.8-56.9-24-79.7 49.3 4.1 88 45.3 88 95.7l0 10.7c0 11.8-9.6 21.3-21.3 21.3l-46.8 0zM96 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: users-rectangle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for users-rectangle (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-users-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-users-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-users-rectangle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-users-rectangle 3s ease-in-out infinite alternate;
}
</style>