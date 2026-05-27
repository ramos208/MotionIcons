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
      <path d="M7 4C8.6875 5.19078 12.64 6.35832 16 5.89682" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 6C5.7541 8.5 8.94471 9.4448 7.72525 10.6777C7.28926 11.1184 6.5883 11.5592 5.43579 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 18C17.0323 18.6667 15.6894 19.8667 16.0645 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 21.9683C10 21.9683 9.69937 14.6936 4.63833 11.5941C3.83539 11.1024 2.8748 10.4546 3.01345 9.37349C3.22024 7.76102 4.68698 6.14069 6.15287 5.38185C7.25347 4.81211 7.71834 3.28124 7.89533 2.44206C7.94076 2.22661 7.91253 2.06997 7.99079 2.01837C7.99141 2.01797 7.98986 2.01898 8.03882 2.01405C8.08777 2.00911 8.10475 2.01593 8.1387 2.02957C13.0252 3.99222 15.5405 3.53236 15.5789 3.72981C15.7171 4.44081 15.928 6.21675 15.353 8.89112C14.3829 13.403 15.1463 16.8054 17.2898 17.915C18.2583 18.4163 22.1303 18.9176 20.6777 20.9229C19.6916 22.2842 13 21.9683 13 21.9683Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: high-heels01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for high-heels01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-high-heels01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-high-heels01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-high-heels01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-high-heels01 3s ease-in-out infinite alternate;
}
</style>