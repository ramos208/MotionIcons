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
      <path d="M2 2H3.30116C4.48672 2 5.0795 2 5.4814 2.37142C5.88331 2.74285 5.96165 3.36307 6.11834 4.60351L7.24573 13.5287C7.45464 15.1826 7.5591 16.0095 8.09497 16.5048C8.63085 17 9.42122 17 11.002 17H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 14H14C13.0572 14 12.5858 14 12.2929 13.6339C12 13.2678 12 12.6785 12 11.5C12 10.3215 12 9.73223 12.2929 9.36612C12.5858 9 13.0572 9 14 9H20C20.9428 9 21.4142 9 21.7071 9.36612C22 9.73223 22 10.3215 22 11.5C22 12.6785 22 13.2678 21.7071 13.6339C21.4142 14 20.9428 14 20 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 9H12C11.0572 9 10.5858 9 10.2929 8.63388C10 8.26777 10 7.67851 10 6.5C10 5.32149 10 4.73223 10.2929 4.36612C10.5858 4 11.0572 4 12 4H18C18.9428 4 19.4142 4 19.7071 4.36612C20 4.73223 20 5.32149 20 6.5C20 7.67851 20 8.26777 19.7071 8.63388C19.4142 9 18.9428 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: trolley01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for trolley01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-trolley01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-trolley01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-trolley01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-trolley01 3s ease-in-out infinite alternate;
}
</style>