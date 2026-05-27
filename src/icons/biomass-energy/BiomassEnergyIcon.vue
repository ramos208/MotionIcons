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
      <path d="M20 14.4986C20 18.6415 16.4183 22 12 22C7.58172 22 4 18.6415 4 14.4986L4 14.2794C4 13.5451 4 13.178 4.25365 13.0433C4.80339 12.7515 6 14 6 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 9.50139C4 5.35849 7.58172 2 12 2C16.4183 2 20 5.35849 20 9.50139V9.72063C20 10.4549 20 10.822 19.7463 10.9567C19.1966 11.2485 18 10 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9796 11.1605C11.2601 12.5841 10.7346 14.8928 11.5622 17.5M11.1431 15.0283C6.89727 12.0079 9.81401 8.53376 12.5599 6.78017C12.8913 6.56855 13.057 6.46274 13.2499 6.5119C13.4428 6.56106 13.5355 6.73406 13.7209 7.08005C15.2623 9.95702 16.3667 14.4893 11.1431 15.0283Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: biomass-energy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for biomass-energy (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-biomass-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-biomass-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-biomass-energy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-biomass-energy 3s ease-in-out infinite alternate;
}
</style>