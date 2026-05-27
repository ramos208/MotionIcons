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
      <path d="M2.867 10.631l.341-1.024H0v4.779h1.16v-1.72h1.434l.341-1.024H1.16v-1.01zm3.03-1.085a2.454 2.454 0 1 0-.006 4.908 2.454 2.454 0 0 0 .007-4.908zm0 3.74a1.287 1.287 0 1 1-.007-2.574 1.287 1.287 0 0 1 .008 2.575zm6.506-3.679h-1.297l-.812 1.304-.82-1.304H8.177l1.468 2.335-1.536 2.444h1.297l.888-1.405.88 1.405h1.297l-1.529-2.444zm.102 1.024h1.413v3.755h1.16V10.63h1.23V9.607h-3.16zm7.304 0l.341-1.024h-3.208v4.779h2.867l.341-1.024h-2.046v-.915h1.432l.341-1.024h-1.773v-.792zm2.143 2.73V9.608h-1.16v4.779h2.867L24 13.362Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: foxtel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for foxtel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-foxtel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-foxtel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-foxtel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-foxtel 3s ease-in-out infinite alternate;
}
</style>