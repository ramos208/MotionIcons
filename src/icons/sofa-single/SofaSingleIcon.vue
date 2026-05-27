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
      <path d="M8 18L7 22M16 18L17 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 9C16.2969 9 16 11 16 11C15.7633 11.9468 15.6596 14.1441 14.8346 14.7882C14.5634 15 14.1884 15 13.4384 15H10.5616C9.8116 15 9.43663 15 9.16536 14.7882C8.34039 14.1441 8.23669 11.9468 8 11C8 11 7.70312 9 6 9C4.89543 9 4 9.89543 4 11C4 11.7403 4.4022 12.3866 5 12.7324L5.38226 14.746C5.67777 16.3026 5.82552 17.0809 6.38051 17.5405C6.93549 18 7.72769 18 9.31208 18H14.6879C16.2723 18 17.0645 18 17.6195 17.5405C18.1745 17.0809 18.3222 16.3026 18.6177 14.746L19 12.7324C19.5978 12.3866 20 11.7403 20 11C20 9.89543 19.1046 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 12.5C9.43278 11.8776 10.6581 11.5 12 11.5C13.3419 11.5 14.5672 11.8776 15.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.01633 9L6.83223 7.7071C6.45413 5.0517 6.26508 3.72399 7.01024 2.862C7.7554 2 9.09221 2 11.7658 2H12.2342C14.9078 2 16.2446 2 16.9898 2.862C17.7349 3.72399 17.5459 5.0517 17.1678 7.7071L16.9837 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sofa-single
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sofa-single (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sofa-single {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sofa-single {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sofa-single 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sofa-single 3s ease-in-out infinite alternate;
}
</style>