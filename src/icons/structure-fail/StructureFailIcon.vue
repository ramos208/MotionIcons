<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M15.0157 5C15.0157 3.58579 15.0157 2.87868 15.5273 2.43934C16.0388 2 16.8622 2 18.509 2C20.1557 2 20.9791 2 21.4906 2.43934C22.0022 2.87868 22.0022 3.58579 22.0022 5C22.0022 6.41421 22.0022 7.12132 21.4906 7.56066C20.9791 8 20.1557 8 18.509 8C16.8622 8 16.0388 8 15.5273 7.56066C15.0157 7.12132 15.0157 6.41421 15.0157 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.0157 19C15.0157 17.5858 15.0157 16.8787 15.5273 16.4393C16.0388 16 16.8622 16 18.509 16C20.1557 16 20.9791 16 21.4906 16.4393C22.0022 16.8787 22.0022 17.5858 22.0022 19C22.0022 20.4142 22.0022 21.1213 21.4906 21.5607C20.9791 22 20.1557 22 18.509 22C16.8622 22 16.0388 22 15.5273 21.5607C15.0157 21.1213 15.0157 20.4142 15.0157 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.54121 10.4825L5.52337 13.4949M8.54121 13.4949L5.52337 10.4825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.04533 17.0314C9.81011 17.0314 12.0103 14.7709 12.0103 11.9931C12.0103 9.21534 9.76898 6.9635 7.00421 6.9635M7.04533 17.0314C4.28056 17.0314 1.99814 14.7709 1.99814 11.9931C1.99814 9.21534 4.23943 6.9635 7.00421 6.9635M7.04533 17.0314C6.9757 19.1612 8.53182 19.9388 9.63988 19.9795H12.0103M7.00421 6.9635C6.93386 4.80343 8.51708 4.04384 9.63989 3.99609H12.021" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: structure-fail
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for structure-fail (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-structure-fail {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-structure-fail {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-structure-fail 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-structure-fail 2s ease-in-out infinite alternate;
}
</style>