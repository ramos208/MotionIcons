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
      <path d="M4.38 15.883c.036.042.125.135.125.135s-.094.059-.152.086a3.046 3.046 0 0 1-1.28.286C1.593 16.39 0 15.29 0 12.878v-8.78h3.512v9.365c0 .95.306 1.781.867 2.42zM24 11.122V7.61h-1.253c-.524-2.76-3.425-4.574-6.341-3.484-1.624.607-2.943 2.548-2.943 4.282v7.979a1608.8 1608.8 0 0 0 .153 0 3.495 3.495 0 0 0 2.38-1.077c.632-.658.98-1.522.98-2.432h1.463V9.366h-1.463V8.4c0-.375.198-.726.526-.909.9-.5 1.815.143 1.815.996v3.22c0 1.273.48 2.456 1.354 3.329a4.666 4.666 0 0 0 3.178 1.351H24v-3.51a1.17 1.17 0 0 1-1.17-1.17v-.586H24zm-14.927 1.17a.585.585 0 0 1-1.17 0V7.61H4.39v5.853a2.928 2.928 0 0 0 4.83 2.224c-.055.433-.294.792-.69 1.04-.373.234-.857.357-1.402.357a3.83 3.83 0 0 1-1.65-.382s-.093-.044-.21-.11v3.119a6.65 6.65 0 0 0 2.468.484c1.312 0 2.51-.41 3.371-1.155.967-.836 1.478-2.056 1.478-3.528V7.61H9.073v4.683z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lyft
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lyft (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lyft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lyft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lyft 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lyft 3s ease-in-out infinite alternate;
}
</style>