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
      <path d="M4.477 13.192c-.36-2.274-.584-3.711-.65-4.805-.062-1.035.051-1.354.1-1.468.169-.395.424-.746.746-1.029.093-.081.363-.288 1.366-.548 1.06-.275 2.496-.507 4.769-.867 2.274-.36 3.71-.584 4.804-.65 1.034-.062 1.354.051 1.468.1.395.169.746.424 1.029.747.08.093.287.362.547 1.366.242.933.45 2.156.743 3.987l-14.646 4.89c-.085-.515-.176-1.085-.276-1.723Zm-3.762.596C.018 9.387-.33 7.187.425 5.422a6.665 6.665 0 0 1 1.743-2.401C3.614 1.757 5.813 1.41 10.211.713c4.4-.698 6.6-1.046 8.367-.291.92.393 1.74.99 2.399 1.743 1.264 1.447 1.612 3.647 2.308 8.047.697 4.4 1.045 6.601.29 8.366a6.664 6.664 0 0 1-1.743 2.402c-1.445 1.263-3.645 1.611-8.045 2.308-4.398.697-6.598 1.045-8.363.29a6.666 6.666 0 0 1-2.4-1.743c-1.263-1.448-1.611-3.648-2.308-8.048H.715v.001Zm7.759 7.814c1.178-.072 2.695-.31 4.94-.665 2.247-.356 3.762-.599 4.905-.895 1.107-.288 1.617-.568 1.947-.856a4.286 4.286 0 0 0 1.12-1.543c.172-.402.281-.974.212-2.116-.071-1.178-.309-2.696-.665-4.942-.355-2.247-.598-3.763-.894-4.906-.287-1.107-.568-1.618-.855-1.947a4.285 4.285 0 0 0-1.543-1.12c-.402-.174-.974-.282-2.116-.213-1.178.071-2.694.309-4.94.664-2.246.357-3.762.6-4.905.896-1.107.287-1.616.568-1.946.855a4.286 4.286 0 0 0-1.12 1.543c-.173.403-.281.974-.212 2.116.07 1.179.308 2.696.664 4.943.356 2.246.598 3.762.895 4.905.287 1.108.567 1.618.855 1.947.423.485.95.868 1.543 1.121.402.173.973.282 2.116.213Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: headlessui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for headlessui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-headlessui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-headlessui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-headlessui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-headlessui 3s ease-in-out infinite alternate;
}
</style>