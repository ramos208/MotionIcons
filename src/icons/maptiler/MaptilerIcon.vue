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
      <path d="m7.794 1.655 4.188 4.188 4.204-4.204A6.13 6.13 0 0 0 12 0a6.136 6.136 0 0 0-4.204 1.655ZM3.25 6.197 7.455 1.99l4.19 4.19-4.206 4.207Zm-.315 8.697 4.168-4.168-2.889-2.89-1.298-1.299a6.19 6.19 0 0 0 .02 8.357zm14.728-5.64 3.073-3.073-4.208-4.207-4.207 4.207 4.207 4.206Zm-6.015 6.013L7.44 11.061l-4.172 4.172 4.206 4.208zm5.216-4.543 4.185 4.185a6.18 6.18 0 0 0 .02-8.387l-4.205 4.202zm-2.448 6.639 2.093 2.092 4.207-4.206-4.188-4.188-4.207 4.206zM11.968 24a3007.16 3007.16 0 0 0 4.2-4.208l-4.187-4.188-4.17 4.174c1.386 1.407 2.773 2.813 4.157 4.222Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: maptiler
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for maptiler (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-maptiler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-maptiler {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-maptiler 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-maptiler 3s ease-in-out infinite alternate;
}
</style>