<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path d="M6.75469 17.2828L5.32612 7.28284C5.154 6.07798 6.08892 5 7.30602 5H10.694C11.9111 5 12.846 6.07797 12.6739 7.28284L11.2453 17.2828C11.1046 18.2681 10.2607 19 9.26541 19H8.73459C7.73929 19 6.89545 18.2681 6.75469 17.2828Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 12L6 12M22 12L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: control-slider
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for control-slider (iconoir). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-control-slider {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-control-slider {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-control-slider 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-control-slider 3s ease-in-out infinite alternate;
}
</style>