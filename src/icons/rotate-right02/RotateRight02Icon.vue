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
      <path d="M10.3596 8.72685L9.86269 11.35L17.9779 6.72095C18.7823 6.26208 19.8109 6.53439 20.2754 7.32917C20.7398 8.12396 20.4642 9.14025 19.6598 9.59912L15.2901 12.0917L16.3284 14.7754C17.0144 16.4988 17.3574 17.3604 17.3451 18.1122C17.3248 19.354 16.8752 20.5016 15.6487 21.2012C14.7944 21.6886 14.0994 21.8069 12.2631 22.1781C11.098 22.4137 10.5154 22.5315 9.97532 22.4897C9.08619 22.4209 8.24892 22.0488 7.60691 21.4372C7.21696 21.0657 6.91964 20.5569 6.32499 19.5393L5.82092 18.6767C5.03035 17.3238 4.63506 16.6474 4.53441 15.9019C4.51636 15.7682 4.50553 15.6336 4.50196 15.4988C4.48209 14.7469 4.7642 14.0173 5.32841 12.5579L7.15495 7.83366C7.43563 7.10768 8.19061 6.67325 8.96822 6.79026C9.90286 6.9309 10.5336 7.80872 10.3596 8.72685Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.1362 4.46465C14.7393 4.8603 13.0127 4.74616 12.3758 4.66671M15.1362 4.46465C15.5331 4.06901 15.5445 2.13697 15.4648 1.50208M15.1362 4.46465C14.1152 2.69642 10.0556 -0.124125 6.02724 2.69642C4.08057 4.05942 3.80588 4.91838 3.49804 5.49381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rotate-right02
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for rotate-right02 (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rotate-right02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rotate-right02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rotate-right02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-rotate-right02 4s linear infinite alternate;
}
</style>