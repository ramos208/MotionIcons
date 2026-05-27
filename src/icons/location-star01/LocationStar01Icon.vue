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
      <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.6047 8.00546L13.2206 9.24751C13.3046 9.4204 13.5286 9.58625 13.7175 9.618L14.8339 9.80501C15.5478 9.92498 15.7158 10.4472 15.2014 10.9624L14.3335 11.8374C14.1865 11.9856 14.106 12.2715 14.1515 12.4761L14.4 13.5594C14.596 14.4168 14.1445 14.7485 13.3921 14.3004L12.3457 13.6758C12.1567 13.5629 11.8453 13.5629 11.6528 13.6758L10.6064 14.3004C9.85748 14.7485 9.40253 14.4133 9.5985 13.5594L9.84698 12.4761C9.89247 12.2715 9.81198 11.9856 9.665 11.8374L8.79709 10.9624C8.28615 10.4472 8.45063 9.92498 9.16455 9.80501L10.2809 9.618C10.4664 9.58625 10.6904 9.4204 10.7744 9.24751L11.3903 8.00546C11.7263 7.33151 12.2722 7.33151 12.6047 8.00546Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: location-star01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for location-star01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-location-star01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-location-star01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-location-star01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-location-star01 3s ease-in-out infinite alternate;
}
</style>