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
      <path d="M8.5469 3.94865L13.9101 6.04728L13.9101 6.04728C17.0034 7.25771 18.55 7.86293 18.4988 8.82296C18.4475 9.78299 16.8334 10.2232 13.6051 11.1036C12.6439 11.3658 12.1633 11.4969 11.8301 11.8301C11.4969 12.1633 11.3658 12.6439 11.1036 13.6051C10.2232 16.8334 9.78299 18.4475 8.82296 18.4988C7.86293 18.55 7.25771 17.0034 6.04728 13.9101L6.04728 13.9101L3.94865 8.5469C2.68138 5.30831 2.04774 3.68901 2.86837 2.86837C3.68901 2.04774 5.30831 2.68138 8.5469 3.94865Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.2585 13.531C18.0919 13.5106 17.9222 13.5001 17.75 13.5001C17.5778 13.5001 17.4081 13.5106 17.2415 13.531M18.2585 21.4691C18.0919 21.4895 17.9222 21.5001 17.75 21.5001C17.5778 21.5001 17.4081 21.4895 17.2415 21.4691M21.5 15.9492C21.4347 15.7972 21.3591 15.6474 21.273 15.5007C21.1869 15.3541 21.0928 15.2148 20.9915 15.0832M14.5085 19.9183C14.4072 19.7866 14.3131 19.6474 14.227 19.5007C14.1409 19.3541 14.0653 19.2043 14 19.0523M14.5085 15.0829C14.4072 15.2146 14.3131 15.3538 14.227 15.5005C14.1409 15.6471 14.0653 15.7969 14 15.949M21.5 19.052C21.4347 19.2041 21.3591 19.3538 21.273 19.5005C21.1869 19.6471 21.0928 19.7864 20.9915 19.918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-progress03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-progress03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-progress03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-progress03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-progress03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-progress03 3s ease-in-out infinite alternate;
}
</style>