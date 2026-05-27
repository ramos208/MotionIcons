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
      <path d="M13.086 16.594v-4.427h3.035c.25.418.362.947.362 1.476 0 1.559-1.17 2.867-2.84 2.951zm-.279-4.455v4.455h-2.784v-4.455zm3.147-.278h-2.868V7.406h.668c1.086 0 1.949.863 1.949 1.949 0 .64-.334 1.225-.835 1.587.417.223.807.529 1.086.919m-3.147-4.455v4.455h-2.784V7.406zm7.796 9.188v-4.427h3.035c.251.418.362.947.362 1.476 0 1.559-1.169 2.867-2.84 2.951zm-.278-4.455v4.455h-2.784v-4.455zm3.146-.278h-2.868V7.406h.668c1.086 0 1.949.863 1.949 1.949 0 .64-.334 1.225-.835 1.587.418.223.808.529 1.086.919m-3.146-4.455v4.455h-2.784V7.406zM1.587 12.139h2.868v2.506H2.979l-.668 1.949H0zm2.868-4.733v4.455H1.671l1.587-4.455zm.278 7.239v-2.506h2.868l1.587 4.455H6.877l-.668-1.949zm2.784-2.784H4.733V7.406H5.93z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: abb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for abb (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-abb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-abb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-abb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-abb 3s ease-in-out infinite alternate;
}
</style>