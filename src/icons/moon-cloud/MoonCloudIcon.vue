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
      <path d="M17.4776 12.0001C17.485 12 17.4925 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H7C4.23858 21 2 18.7614 2 16C2 13.4003 3.98398 11.2641 6.52042 11.0227M17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227M17.4776 12.0001C17.3753 13.1345 16.9286 14.1696 16.2428 15M6.52042 11.0227C6.67826 11.0077 6.83823 11 7 11C8.12582 11 9.16474 11.3721 10.0005 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 5.53058C10.9061 5.04705 10.7328 4.5707 10.4752 4.12013C9.85932 3.04292 8.87603 2.31347 7.77746 2C7.94723 3.37965 7.30486 4.79173 6.03759 5.53058C4.77033 6.26942 3.23814 6.12516 2.13984 5.28687C1.85939 6.40434 1.99332 7.62899 2.6092 8.7062C3.44206 10.1629 4.94685 10.9839 6.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moon-cloud
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for moon-cloud (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moon-cloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moon-cloud {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moon-cloud 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moon-cloud 3s ease-in-out infinite alternate;
}
</style>