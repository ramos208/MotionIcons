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
      <path d="M7.49114 14.0015C3.00094 11.6015 3.00094 10.4015 3.00094 10.0015C3.00094 9.60146 3.00094 8.40146 7.49114 6.00146M7.49114 14.0015C3.00094 16.4015 3.00006 17.2015 3.00006 18.0015M7.49114 14.0015C11.9804 11.602 11.9804 10.402 11.9804 10.0017C11.9804 9.60147 11.9804 8.40099 7.49114 6.00146M7.49114 6.00146C11.9813 3.60146 11.9813 2.80146 11.9813 2.00146M7.49114 6.00146L5.30787 4.74576C3.00063 3.28295 3.00006 2.64221 3.00006 2.00146" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.4119 12.0005V13.9795M10.9249 15.5009H12.9768M18.9479 15.5009H20.9999M18.9479 18.4741H20.9999M10.9249 18.4741H12.9768M14.4119 20.0197V21.9987M17.4373 20.0197V21.9987M17.4266 12.0005V13.9795M13.9768 19.968H17.9479C18.5002 19.968 18.9479 19.5203 18.9479 18.968V14.9795C18.9479 14.4272 18.5002 13.9795 17.9479 13.9795H13.9768C13.4246 13.9795 12.9768 14.4272 12.9768 14.9795V18.968C12.9768 19.5203 13.4246 19.968 13.9768 19.968Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ai-dna
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ai-dna (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ai-dna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ai-dna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ai-dna 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ai-dna 2s ease-in-out infinite alternate;
}
</style>