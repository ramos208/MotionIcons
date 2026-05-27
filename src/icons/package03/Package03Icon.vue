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
      <path d="M17.8043 4.06866L13.6094 2.45779C12.8147 2.1526 12.4173 2 12 2C11.5827 2 11.1853 2.1526 10.3906 2.45779L6.19572 4.06866C4.06524 4.88678 3 5.29585 3 6C3 6.70415 4.06524 7.11322 6.19573 7.93134L10.3906 9.54221C11.1853 9.8474 11.5827 10 12 10C12.4173 10 12.8147 9.8474 13.6094 9.54221L17.8043 7.93134C19.9348 7.11322 21 6.70415 21 6C21 5.29585 19.9348 4.88678 17.8043 4.06866Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 6V18C21 18.7042 19.9348 19.1132 17.8043 19.9313L13.6094 21.5422C12.8147 21.8474 12.4173 22 12 22C11.5827 22 11.1853 21.8474 10.3906 21.5422L6.19573 19.9313C4.06524 19.1132 3 18.7042 3 18V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 10V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 4L7 8V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 16.092V15.2555C5.5 14.5602 5.5 14.2125 5.72475 14.0621C5.94951 13.9116 6.26431 14.0486 6.89392 14.3225L8.39392 14.975C8.68787 15.1029 8.83484 15.1668 8.91742 15.294C9 15.4211 9 15.5834 9 15.908V16.7445C9 17.4398 9 17.7875 8.77525 17.9379C8.55049 18.0884 8.23568 17.9514 7.60608 17.6775L6.10608 17.025C5.81213 16.8971 5.66516 16.8332 5.58258 16.706C5.5 16.5789 5.5 16.4166 5.5 16.092Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: package03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for package03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-package03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-package03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-package03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-package03 3s ease-in-out infinite alternate;
}
</style>