<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="m23.729 13.55-1.903-.995-9.134 4.776a1.497 1.497 0 0 1-1.383.002l-9.137-4.778-1.903.995a.5.5 0 0 0 0 .888l11.499 6.011a.495.495 0 0 0 .462 0l11.499-6.011a.5.5 0 0 0 0-.888zM.269 10.447l11.499 6.013a.495.495 0 0 0 .462 0l11.499-6.013a.5.5 0 0 0 0-.887l-11.5-6.012a.505.505 0 0 0-.462 0L.268 9.559a.5.5 0 0 0 .001.887z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: removedotbg
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for removedotbg (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-removedotbg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-removedotbg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-removedotbg 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-removedotbg 3s ease-in-out infinite alternate;
}
</style>