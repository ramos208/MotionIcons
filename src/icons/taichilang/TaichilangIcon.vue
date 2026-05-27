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
      <path d="M15.526 4.6782c-.0196 1.6052-.8167 2.8963-2.211 3.8542-1.2176.8371-2.47 1.627-3.6316 2.5398-1.8976 1.4954-3.1392 3.4337-3.1784 5.9263-.0415 2.7115 1.1753 4.7975 3.4344 6.274.0415.0276.0888.0502.1302.0756.2.123.3637.3055.2197.5237-.0698.1033-.3273.1542-.4728.115-1.2168-.2975-2.3856-.731-3.4556-1.395-3.462-2.1486-5.484-5.2623-5.9517-9.318C-.2542 7.4683 3.1934 2.0903 8.6833.3542c1.3558-.4313 2.7224-.5266 4.0731.0422 1.7223.72 2.8257 2.3806 2.7697 4.2818Zm8.1462 9.2648c-.0276 1.0699-.328 2.2693-1.4445 3.1115-1.3004.9805-2.9755.9165-3.9981-.1483a2.8359 2.8359 0 0 1-.6444-1.0809 2.9144 2.9144 0 0 1-.12-1.2546 2.8788 2.8788 0 0 1 .4334-1.1856 2.8439 2.8439 0 0 1 .8976-.8786c.1389-.0873.2807-.171.4218-.2524 1.1674-.6582 1.6925-1.6889 1.731-3.0053a1.9547 1.9547 0 0 1 .0895-.3804c.131.056.28.0836.3884.1709 1.4336 1.126 2.2453 2.8148 2.2453 4.9037z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: taichilang
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for taichilang (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-taichilang {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-taichilang {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-taichilang 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-taichilang 2s ease-in-out infinite alternate;
}
</style>