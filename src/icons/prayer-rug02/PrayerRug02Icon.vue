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
      <path d="M16 4H8C6.58579 4 5.87868 4 5.43934 4.43934C5 4.87868 5 5.58579 5 7V17C5 18.4142 5 19.1213 5.43934 19.5607C5.87868 20 6.58579 20 8 20H16C17.4142 20 18.1213 20 18.5607 19.5607C19 19.1213 19 18.4142 19 17V7C19 5.58579 19 4.87868 18.5607 4.43934C18.1213 4 17.4142 4 16 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.38664 11.3202C8.24404 9.27033 9.87734 8.37134 11.1311 7.4973C11.6067 7.16578 11.8444 7.00002 11.9986 7C12.1529 6.99998 12.3907 7.16572 12.8664 7.49718C14.1208 8.37135 15.7559 9.27044 14.614 11.3209C14.4138 11.6804 14.3137 11.8602 14.2804 11.9887C14.2471 12.1172 14.247 12.2672 14.2469 12.5674L14.2454 15.978C14.2452 16.4598 14.2451 16.7007 14.0987 16.8503C13.9523 17 13.7167 17 13.2454 17H10.7543C10.2829 17 10.0472 17 9.90072 16.8503C9.75428 16.7005 9.75428 16.4596 9.75428 15.9776V12.5684C9.75428 12.2678 9.75428 12.1175 9.72092 11.9888C9.68757 11.8601 9.58726 11.6801 9.38664 11.3202Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prayer-rug02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prayer-rug02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prayer-rug02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prayer-rug02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prayer-rug02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prayer-rug02 3s ease-in-out infinite alternate;
}
</style>