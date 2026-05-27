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
      <path d="M21 11.1835V8.28041C21 6.64041 21 5.82041 20.5959 5.28541C20.1918 4.75042 19.2781 4.49068 17.4507 3.97122C16.2022 3.61632 15.1016 3.18875 14.2223 2.79841C13.0234 2.26622 12.424 2.00012 12 2.00012C11.576 2.00012 10.9766 2.26622 9.77771 2.79841C8.89839 3.18875 7.79784 3.61632 6.54933 3.97122C4.72193 4.49068 3.80822 4.75042 3.40411 5.28541C3 5.82041 3 6.64041 3 8.28041V11.1835C3 16.8086 8.06277 20.1836 10.594 21.5195C11.2011 21.8399 11.5046 22.0001 12 22.0001C12.4954 22.0001 12.7989 21.8399 13.406 21.5195C15.9372 20.1836 21 16.8086 21 11.1835Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 16.0001C12.1396 16.0001 12.2694 15.9365 12.5289 15.8093L14.6152 14.7869C15.5384 14.3345 16 14.1083 16 13.7501V9.25012M12 16.0001C11.8604 16.0001 11.7306 15.9365 11.4711 15.8093L9.38478 14.7869C8.4616 14.3345 8 14.1083 8 13.7501V9.25012M12 16.0001V11.5001M16 9.25012C16 8.89191 15.5384 8.6657 14.6152 8.2133L12.5289 7.19092C12.2694 7.06372 12.1396 7.00012 12 7.00012C11.8604 7.00012 11.7306 7.06372 11.4711 7.19092L9.38478 8.2133C8.46159 8.6657 8 8.89191 8 9.25012M16 9.25012C16 9.60834 15.5384 9.83454 14.6152 10.2869L12.5289 11.3093C12.2694 11.4365 12.1396 11.5001 12 11.5001M8 9.25012C8 9.60834 8.46159 9.83454 9.38478 10.2869L11.4711 11.3093C11.7306 11.4365 11.8604 11.5001 12 11.5001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shield-blockchain
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for shield-blockchain (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shield-blockchain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shield-blockchain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shield-blockchain 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-shield-blockchain 2s ease-in-out infinite alternate;
}
</style>