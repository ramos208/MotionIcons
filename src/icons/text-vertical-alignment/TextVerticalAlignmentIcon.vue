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
      <path d="M13 4L22 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 8L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 12H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 16L22 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 8.5L6.71429 5.5M6.71429 5.5L5.58623 2.86786C5.55491 2.7948 5.53926 2.75827 5.51945 2.72724C5.44354 2.60832 5.31395 2.527 5.16623 2.50559C5.12769 2.5 5.08512 2.5 5 2.5C4.91488 2.5 4.87231 2.5 4.83377 2.50559C4.68605 2.527 4.55646 2.60831 4.48055 2.72724C4.46074 2.75826 4.44509 2.7948 4.41377 2.86786L3.28571 5.5M6.71429 5.5L3.28571 5.5M3.28571 5.5L2 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 21.5L6.71429 18.5M6.71429 18.5L5.58623 15.8679C5.55491 15.7948 5.53926 15.7583 5.51945 15.7272C5.44354 15.6083 5.31395 15.527 5.16623 15.5056C5.12769 15.5 5.08512 15.5 5 15.5C4.91488 15.5 4.87231 15.5 4.83377 15.5056C4.68605 15.527 4.55646 15.6083 4.48055 15.7272C4.46074 15.7583 4.44509 15.7948 4.41377 15.8679L3.28571 18.5M6.71429 18.5L3.28571 18.5M3.28571 18.5L2 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: text-vertical-alignment
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for text-vertical-alignment (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-text-vertical-alignment {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-text-vertical-alignment {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-text-vertical-alignment 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-text-vertical-alignment 3s ease-in-out infinite alternate;
}
</style>