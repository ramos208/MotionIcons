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
      <path d="m8.646 4.738.034.02 2.945 1.66a.66.66 0 0 0 .65 0l2.92-1.644a.992.992 0 0 1 1.008 1.71l-.033.02-1.688.952a.33.33 0 0 0 0 .574l4.555 2.57a.66.66 0 0 0 .65 0l2.815-1.59a.993.993 0 0 1 1.01 1.71l-.035.02-1.585.89a.33.33 0 0 0 0 .578l1.594.897a.992.993 0 0 1-.94 1.748l-.035-.02-2.826-1.591a.66.66 0 0 0-.65 0l-4.605 2.595a.33.33 0 0 0 0 .575l1.905 1.072a.993.993 0 0 1-.94 1.748l-.035-.018-3.133-1.767a.66.66 0 0 0-.65 0L8.416 19.23a.992.992 0 0 1-1.006-1.71l.033-.02 1.93-1.088a.33.33 0 0 0 0-.575l-4.564-2.572a.66.66 0 0 0-.65 0l-2.689 1.51a.993.993 0 0 1-1.005-1.711l.034-.018 1.452-.817a.33.33 0 0 0 0-.577l-1.45-.817a.992.992 0 0 1 .941-1.746l.033.018 2.685 1.515a.66.66 0 0 0 .65 0l4.607-2.596a.33.33 0 0 0 0-.576l-1.711-.963a.992.993 0 0 1 .94-1.748Zm2.977 4.324-4.609 2.59a.33.33 0 0 0 0 .58l4.563 2.57a.66.66 0 0 0 .65 0l4.606-2.595a.33.33 0 0 0 0-.577l-4.558-2.57a.66.66 0 0 0-.65 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: traefikmesh
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for traefikmesh (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-traefikmesh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-traefikmesh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-traefikmesh 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-traefikmesh 3s ease-in-out infinite alternate;
}
</style>