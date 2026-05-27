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
      <path d="M5.5 3C6.90446 3 7.60669 3 8.11114 3.37919C8.32952 3.54335 8.51702 3.75429 8.66294 3.99997C9 4.56747 9 5.35748 9 6.9375L9 17.0625C9 18.6425 9 19.4325 8.66294 20C8.51702 20.2457 8.32952 20.4566 8.11114 20.6208C7.60669 21 6.90446 21 5.5 21C4.09554 21 3.39331 21 2.88886 20.6208C2.67048 20.4566 2.48298 20.2457 2.33706 20C2 19.4325 2 18.6425 2 17.0625L2 6.9375C2 5.35748 2 4.56747 2.33706 3.99997C2.48298 3.75429 2.67048 3.54335 2.88886 3.37919C3.39331 3 4.09554 3 5.5 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 11.9375L20 17.0625C20 18.6425 20 19.4325 19.6629 20C19.517 20.2457 19.3295 20.4566 19.1111 20.6208C18.6067 21 17.9045 21 16.5 21C15.0955 21 14.3933 21 13.8889 20.6208C13.6705 20.4566 13.483 20.2457 13.3371 20C13 19.4325 13 18.6425 13 17.0625L13 6.9375C13 5.35748 13 4.56747 13.3371 3.99997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 8.99936L16 3M22 3.00064L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: column-delete
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for column-delete (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-column-delete {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-column-delete {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-column-delete 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-column-delete 3s ease-in-out infinite alternate;
}
</style>