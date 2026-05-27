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
      <path d="M10.5 14.5H7.5C6.55719 14.5 6.08579 14.5 5.79289 14.7929C5.5 15.0858 5.5 15.5572 5.5 16.5V16.5C5.5 17.4428 5.5 17.9142 5.79289 18.2071C6.08579 18.5 6.55719 18.5 7.5 18.5H10.5C11.4428 18.5 11.9142 18.5 12.2071 18.2071C12.5 17.9142 12.5 17.4428 12.5 16.5V16.5C12.5 15.5572 12.5 15.0858 12.2071 14.7929C11.9142 14.5 11.4428 14.5 10.5 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.5 13.5V8.5C21.5 7.50878 21.5 7.01317 21.3461 6.55132C21.1921 6.08947 20.8947 5.69298 20.3 4.9C19.4167 3.7223 18.9751 3.13344 18.3416 2.81672C17.7082 2.5 16.9721 2.5 15.5 2.5H8.5C7.02786 2.5 6.2918 2.5 5.65836 2.81672C5.02492 3.13344 4.58328 3.72229 3.7 4.9C3.10527 5.69298 2.8079 6.08947 2.65395 6.55132C2.5 7.01317 2.5 7.50878 2.5 8.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5H13.5C17.2712 21.5 19.1569 21.5 20.3284 20.3284C21.5 19.1569 21.5 17.2712 21.5 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 6.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 6.5H9.5L10.5 2.5H13.5L14.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 6.5V8.5C14.5 9.44281 14.5 9.91421 14.2071 10.2071C13.9142 10.5 13.4428 10.5 12.5 10.5H11.5C10.5572 10.5 10.0858 10.5 9.79289 10.2071C9.5 9.91421 9.5 9.44281 9.5 8.5V6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: package02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for package02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-package02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-package02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-package02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-package02 3s ease-in-out infinite alternate;
}
</style>