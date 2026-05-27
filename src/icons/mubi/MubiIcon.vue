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
      <path d="M3.357.033A3.357 3.357 0 0 0 0 3.39a3.357 3.357 0 0 0 3.357 3.357A3.357 3.357 0 0 0 6.713 3.39 3.357 3.357 0 0 0 3.357.033Zm8.643 0A3.357 3.357 0 0 0 8.645 3.39 3.357 3.357 0 0 0 12 6.746a3.357 3.357 0 0 0 3.357-3.357A3.357 3.357 0 0 0 12 .033Zm-8.643 8.61A3.357 3.357 0 0 0 0 12a3.357 3.357 0 0 0 3.357 3.355A3.357 3.357 0 0 0 6.713 12a3.357 3.357 0 0 0-3.356-3.357Zm8.643 0A3.357 3.357 0 0 0 8.645 12 3.357 3.357 0 0 0 12 15.355 3.357 3.357 0 0 0 15.357 12 3.357 3.357 0 0 0 12 8.643zm8.643 0A3.357 3.357 0 0 0 17.287 12a3.357 3.357 0 0 0 3.356 3.355A3.357 3.357 0 0 0 24 12a3.357 3.357 0 0 0-3.357-3.357Zm-17.286 8.61A3.357 3.357 0 0 0 0 20.612a3.357 3.357 0 0 0 3.357 3.356 3.357 3.357 0 0 0 3.356-3.356 3.357 3.357 0 0 0-3.356-3.357Zm8.643 0a3.357 3.357 0 0 0-3.355 3.358A3.357 3.357 0 0 0 12 23.967a3.357 3.357 0 0 0 3.357-3.356A3.357 3.357 0 0 0 12 17.254z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mubi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mubi (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mubi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mubi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mubi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mubi 3s ease-in-out infinite alternate;
}
</style>