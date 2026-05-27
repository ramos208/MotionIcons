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
      <path d="M14.5352 11.0865L18.5575 12.6605C20.8775 13.5683 22.0375 14.0222 21.9991 14.7422C21.9606 15.4622 20.75 15.7924 18.3288 16.4527C17.6079 16.6493 17.2475 16.7476 16.9976 16.9976C16.7476 17.2475 16.6493 17.6079 16.4527 18.3288C15.7924 20.75 15.4622 21.9606 14.7422 21.9991C14.0222 22.0375 13.5683 20.8775 12.6605 18.5575L11.0865 14.5352C10.136 12.1062 9.6608 10.8918 10.2763 10.2763C10.8918 9.6608 12.1062 10.136 14.5352 11.0865Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 8.5V11.5M11.5 2H8.5M8.5 18H9M18 9V8.5M4.5 18C3.11929 18 2 16.8807 2 15.5M2 4.5C2 3.11929 3.11929 2 4.5 2M18 4.5C18 3.11929 16.8807 2 15.5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-rectangle-selection02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-rectangle-selection02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-rectangle-selection02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-rectangle-selection02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-rectangle-selection02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-rectangle-selection02 3s ease-in-out infinite alternate;
}
</style>