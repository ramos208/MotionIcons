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
      <path d="M18.264 6.24c-2.52 0-5.376 3.024-6.264 3.984-.72-.792-3.696-3.984-6.264-3.984C2.568 6.24 0 8.832 0 12c0 3.168 2.568 5.76 5.736 5.76 2.52 0 5.376-3.024 6.264-3.984.72.792 3.696 3.984 6.264 3.984C21.432 17.76 24 15.168 24 12c0-3.168-2.568-5.76-5.736-5.76ZM5.736 15.384A3.38 3.38 0 0 1 2.352 12a3.395 3.395 0 0 1 3.384-3.384c1.176 0 3.24 1.8 4.68 3.384-.408.456-3.144 3.384-4.68 3.384zm12.528 0c-1.176 0-3.24-1.8-4.68-3.384.408-.456 3.168-3.384 4.68-3.384A3.38 3.38 0 0 1 21.648 12c-.024 1.872-1.536 3.384-3.384 3.384z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: internetcomputer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for internetcomputer (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-internetcomputer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-internetcomputer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-internetcomputer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-internetcomputer 3s ease-in-out infinite alternate;
}
</style>