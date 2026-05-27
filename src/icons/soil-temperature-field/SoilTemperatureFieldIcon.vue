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
      <path d="M3 3C4.86377 3 5.79565 3 6.53073 3.30448C7.51085 3.71046 8.28954 4.48915 8.69552 5.46927C9 6.20435 9 7.13623 9 9C7.13623 9 6.20435 9 5.46927 8.69552C4.48915 8.28954 3.71046 7.51085 3.30448 6.53073C3 5.79565 3 4.86377 3 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 5C11.7575 5 11.1362 5 10.6462 5.20299C9.99277 5.47364 9.47364 5.99277 9.20299 6.64618C9 7.13623 9 7.75749 9 9C10.2425 9 10.8638 9 11.3538 8.79701C12.0072 8.52636 12.5264 8.00723 12.797 7.35382C13 6.86377 13 6.24251 13 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 9V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 14L3 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 17L3 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 20L3 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 21C20.6569 21 22 19.6569 22 18C22 17.3038 21.7629 16.663 21.365 16.154C20.861 15.5093 20.609 15.1869 20.5545 15.0286C20.5 14.8704 20.5 14.6628 20.5 14.2478V10.5C20.5 9.67157 19.8284 9 19 9C18.1716 9 17.5 9.67157 17.5 10.5V14.2478C17.5 14.6628 17.5 14.8704 17.4455 15.0286C17.391 15.1869 17.139 15.5093 16.635 16.154C16.2371 16.663 16 17.3038 16 18C16 19.6569 17.3431 21 19 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: soil-temperature-field
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for soil-temperature-field (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-soil-temperature-field {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-soil-temperature-field {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-soil-temperature-field 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-soil-temperature-field 3s ease-in-out infinite alternate;
}
</style>