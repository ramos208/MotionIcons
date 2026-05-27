<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: magic
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for magic (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-magic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-magic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-magic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-magic 2s ease-in-out infinite alternate;
}
</style>