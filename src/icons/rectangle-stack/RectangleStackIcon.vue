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
      <path d="M6 6.87803V6C6 4.75736 7.00736 3.75 8.25 3.75H15.75C16.9926 3.75 18 4.75736 18 6V6.87803M6 6.87803C6.23458 6.79512 6.48702 6.75 6.75 6.75H17.25C17.513 6.75 17.7654 6.79512 18 6.87803M6 6.87803C5.12611 7.18691 4.5 8.02034 4.5 9V9.87803M18 6.87803C18.8739 7.18691 19.5 8.02034 19.5 9V9.87803M19.5 9.87803C19.2654 9.79512 19.013 9.75 18.75 9.75H5.25C4.98702 9.75 4.73458 9.79512 4.5 9.87803M19.5 9.87803C20.3739 10.1869 21 11.0203 21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12C3 11.0203 3.62611 10.1869 4.5 9.87803" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rectangle-stack
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rectangle-stack (heroicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rectangle-stack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rectangle-stack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rectangle-stack 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rectangle-stack 3s ease-in-out infinite alternate;
}
</style>