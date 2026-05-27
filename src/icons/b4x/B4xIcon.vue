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
      <path d="M14.538 23.992c-6.265-.455-10.82-3-13.57-7.574a13 13 0 0 1-.814-1.575c0-.09 7.728-14.238 7.76-14.22a2 2 0 0 1 .068.46c.075.925.373 2.335.71 3.357a14.8 14.8 0 0 0 2.044 3.97 4 4 0 0 0 .37.456c.033.022.22.227.417.462.198.235.49.553.653.71l.299.283-.325-.355a19 19 0 0 1-.597-.697l-.276-.34.478-.843 3.835-6.769c.418-.735.769-1.328.776-1.317a8 8 0 0 1-.126.746c-.665 3.291-.5 6.258.477 8.728.164.418.523 1.157.56 1.157.015 0 .26-.433.545-.96a1795 1795 0 0 1 4.13-7.593 1 1 0 0 1 .13-.201c.012 0-.066.239-.17.53-.575 1.593-.945 3.097-1.135 4.627-.093.746-.082 2.492.026 3.194.287 1.899.95 3.455 2.026 4.735.362.429.787.828.952.888.048.018.074.06.063.09l-1.683 3.79A284 284 0 0 0 20.5 23.5c0 .09-.168.142-.735.235-1.16.186-1.948.242-3.478.261-.82.008-1.604.004-1.75-.007"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: b4x
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for b4x (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-b4x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-b4x {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-b4x 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-b4x 3s ease-in-out infinite alternate;
}
</style>