<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M13.6394 8.72685L14.1363 11.35L6.02118 6.72095C5.21674 6.26208 4.18811 6.53439 3.72366 7.32917C3.25922 8.12396 3.53484 9.14025 4.33928 9.59912L8.70898 12.0917L7.67067 14.7754C6.98467 16.4988 6.64167 17.3604 6.65396 18.1122C6.67425 19.354 7.12381 20.5016 8.35033 21.2012C9.20462 21.6886 9.89966 21.8069 11.7359 22.1781C12.901 22.4137 13.4836 22.5315 14.0237 22.4897C14.9128 22.4209 15.7501 22.0488 16.3921 21.4372C16.782 21.0657 17.0793 20.5569 17.674 19.5393L18.1781 18.6767C18.9686 17.3238 19.3639 16.6474 19.4646 15.9019C19.4826 15.7682 19.4935 15.6336 19.497 15.4988C19.5169 14.7469 19.2348 14.0173 18.6706 12.5579L16.844 7.83366C16.5633 7.10768 15.8084 6.67325 15.0308 6.79026C14.0961 6.9309 13.4654 7.80872 13.6394 8.72685Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.86287 4.46465C9.25977 4.8603 10.9864 4.74616 11.6233 4.66671M8.86287 4.46465C8.46598 4.06901 8.45462 2.13697 8.53431 1.50208M8.86287 4.46465C9.88394 2.69642 13.9435 -0.124125 17.9719 2.69642C19.9185 4.05942 20.1932 4.91838 20.5011 5.49381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rotate-left02
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for rotate-left02 (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-rotate-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rotate-left02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rotate-left02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-rotate-left02 4s linear infinite alternate;
}
</style>