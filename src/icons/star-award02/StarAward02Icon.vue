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
      <path d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 15V20.5128C8 21.3875 8 21.8248 8.27639 21.9634C8.55279 22.1019 8.90186 21.8395 9.6 21.3146L10.8 20.4125C11.3778 19.9782 11.6667 19.761 12 19.761C12.3333 19.761 12.6222 19.9782 13.2 20.4125L14.4 21.3146C15.0981 21.8395 15.4472 22.1019 15.7236 21.9634C16 21.8248 16 21.3875 16 20.5128V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.6686 5.21225C11.8066 4.92946 12.1934 4.92947 12.3314 5.21225L13.1449 6.87978C13.1989 6.99046 13.3003 7.06749 13.4178 7.08703L15.1862 7.38122C15.4859 7.43108 15.6054 7.81473 15.391 8.0392L14.125 9.36513C14.0412 9.45297 14.0025 9.57736 14.021 9.69991L14.3 11.5504C14.3473 11.8638 14.0345 12.101 13.7638 11.957L12.1688 11.1083C12.0628 11.0518 11.9372 11.0518 11.8312 11.1083L10.2362 11.957C9.96554 12.101 9.65271 11.8638 9.69996 11.5504L9.979 9.69991C9.99748 9.57736 9.95882 9.45297 9.87495 9.36513L8.60896 8.0392C8.39464 7.81473 8.51408 7.43108 8.8138 7.38122L10.5822 7.08703C10.6997 7.06749 10.8011 6.99046 10.8551 6.87978L11.6686 5.21225Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: star-award02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for star-award02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-star-award02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-star-award02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-star-award02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-star-award02 3s ease-in-out infinite alternate;
}
</style>