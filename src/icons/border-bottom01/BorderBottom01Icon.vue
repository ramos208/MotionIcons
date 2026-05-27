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
      <path d="M2.5 17.5C2.69854 18.594 3.04969 19.3991 3.6708 20.0356C5.09987 21.5 7.39991 21.5 12 21.5C16.6001 21.5 18.9001 21.5 20.3292 20.0356C20.9503 19.3991 21.3015 18.594 21.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.75143 6.31038C2.94471 5.26831 3.28657 4.50138 3.89124 3.89506C4.49591 3.28875 5.26076 2.94595 6.3 2.75214M2.50496 14C2.5 13.414 2.5 12.7117 2.5 12.0259C2.5 11.3401 2.5 10.5751 2.50496 9.98913M10.1 2.505C10.6844 2.50003 11.3161 2.50003 12 2.50003C12.6839 2.50003 13.3156 2.50003 13.9001 2.505M17.7 2.75214C18.7392 2.94595 19.5041 3.28874 20.1088 3.89506C20.7134 4.50138 21.0553 5.26831 21.2486 6.31038M21.495 14C21.5 13.414 21.5 12.7117 21.5 12.0259C21.5 11.3402 21.5 10.5751 21.495 9.98913" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.5 12L4 12M20 12L21.5 12M12 15L12 9.00003M12 4.46878L12 3.00003M9 12L15 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: border-bottom01
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for border-bottom01 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-border-bottom01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-border-bottom01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-border-bottom01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-border-bottom01 2s ease-in-out infinite alternate;
}
</style>