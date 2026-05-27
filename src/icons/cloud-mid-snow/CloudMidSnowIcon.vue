<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M17.4776 8.81069C17.485 8.81066 17.4925 8.81064 17.5 8.81064C19.9853 8.81064 22 10.7618 22 13.1686C22 15.4118 20.25 17.2591 18 17.5M17.4776 8.81069C17.4924 8.65119 17.5 8.48966 17.5 8.32642C17.5 5.38472 15.0376 3 12 3C9.12324 3 6.76233 5.13891 6.52042 7.86418M17.4776 8.81069C17.3753 9.90933 16.9286 10.9118 16.2428 11.716M6.52042 7.86418C3.98398 8.09794 2 10.1668 2 12.6844C2 15.027 3.71776 17.0514 6 17.5M6.52042 7.86418C6.67826 7.84964 6.83823 7.8422 7 7.8422C8.12582 7.8422 9.16474 8.20254 10.0005 8.81064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15V21M14.5 16.5L9.50013 19.5M9.5 16.5L14.4999 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-mid-snow
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-mid-snow (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-mid-snow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-mid-snow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-mid-snow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-mid-snow 3s ease-in-out infinite alternate;
}
</style>