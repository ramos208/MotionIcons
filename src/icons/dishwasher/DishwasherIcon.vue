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
      <path d="M7.5 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H18.9999C20.1045 3 20.9999 3.89543 20.9999 4.99999L21 19C21 20.1046 20.1046 21 19 21H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 7H3.00006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16V21M12 21H10M12 21H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16C13.6569 16 15 14.5076 15 12.6667V10H9V12.6667C9 14.5076 10.3431 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 5.01L18.01 4.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5.01L15.01 4.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dishwasher
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dishwasher (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dishwasher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dishwasher {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dishwasher 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dishwasher 3s ease-in-out infinite alternate;
}
</style>