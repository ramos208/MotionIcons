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
      <path d="M0 0v24h24V0zm11.717 5.792c1.564 0 2.671 1.04 2.671 2.468 0 1.044-.428 1.819-1.746 2.915l1.952 2.648c.163-.147.303-1.046.274-1.777-.003-.087-.022-.341-.04-.62h1.814c0 .244.024.595.024.683 0 1.426-.224 2.327-.909 3.198L17.2 17.22h-2.232l-.503-.678c-.823.659-1.546.905-2.713.898-2.284-.013-3.857-1.173-4.005-3.239-.089-1.235.737-2.506 2.32-3.42C9.049 9.477 8.84 9.025 8.84 8.207c0-1.392 1.191-2.415 2.878-2.415zm-9.424.134h4.064v11.296H4.1V7.735H2.293zm14.45 0h4.065v11.296H18.55V7.735h-1.807zm-5.036 1.49c-.545 0-.931.358-.931.845 0 .47.14.726.79 1.562.772-.557 1.058-1.075 1.058-1.58 0-.504-.354-.828-.917-.828zm-.517 4.811c-1.002.663-1.404 1.31-1.386 1.919.03.928.806 1.522 1.948 1.522.703 0 1.174-.257 1.579-.594z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 1and1
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 1and1 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-1and1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-1and1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-1and1 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-1and1 3s ease-in-out infinite alternate;
}
</style>