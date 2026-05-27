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
      <path d="M15.442.718a2.58 2.58 0 0 0-2.579 2.579 2.58 2.58 0 0 0 1.368 2.275L12.809 8.27a3.505 3.505 0 0 0-1.077-.172 3.505 3.505 0 0 0-3.505 3.505 3.505 3.505 0 0 0 .085.745l-2.83 1.036a2.97 2.97 0 0 0-2.513-1.39A2.97 2.97 0 0 0 0 14.962a2.97 2.97 0 0 0 2.97 2.97 2.97 2.97 0 0 0 2.969-2.97 2.97 2.97 0 0 0-.072-.634l2.716-1.193a3.505 3.505 0 0 0 3.15 1.972 3.505 3.505 0 0 0 2.129-.724l2.276 2.167a4.305 4.305 0 0 0-.749 2.426 4.305 4.305 0 0 0 4.306 4.305A4.305 4.305 0 0 0 24 18.977a4.305 4.305 0 0 0-4.305-4.305 4.305 4.305 0 0 0-2.718.969l-2.424-1.964a3.505 3.505 0 0 0 .684-2.074 3.505 3.505 0 0 0-1.521-2.89l1.204-2.891a2.58 2.58 0 0 0 .522.054 2.58 2.58 0 0 0 2.58-2.58 2.58 2.58 0 0 0-2.58-2.578Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moleculer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for moleculer (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moleculer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moleculer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moleculer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moleculer 3s ease-in-out infinite alternate;
}
</style>