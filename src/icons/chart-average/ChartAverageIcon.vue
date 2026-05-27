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
      <path d="M20.9877 21H9.9877C6.68787 21 5.03795 21 4.01283 19.9749C2.9877 18.9497 2.9877 17.2998 2.9877 14V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.9877 7C7.61628 5.87847 8.46901 5 9.781 5C15.3279 5 12.2101 17 18.1708 17C19.4921 17 20.3397 16.1157 20.9877 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.9998 11.0006H10.9873M11.0123 11.0006C11.0123 11.0144 11.0011 11.0256 10.9873 11.0256C10.9735 11.0256 10.9623 11.0144 10.9623 11.0006C10.9623 10.9868 10.9735 10.9756 10.9873 10.9756C11.0011 10.9756 11.0123 10.9868 11.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.99981 11.0006H6.98731M7.01231 11.0006C7.01231 11.0144 7.00112 11.0256 6.98731 11.0256C6.9735 11.0256 6.96231 11.0144 6.96231 11.0006C6.96231 10.9868 6.9735 10.9756 6.98731 10.9756C7.00112 10.9756 7.01231 10.9868 7.01231 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.9998 11.0006H20.9873M21.0123 11.0006C21.0123 11.0144 21.0011 11.0256 20.9873 11.0256C20.9735 11.0256 20.9623 11.0144 20.9623 11.0006C20.9623 10.9868 20.9735 10.9756 20.9873 10.9756C21.0011 10.9756 21.0123 10.9868 21.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.9998 11.0006H16.9873M17.0123 11.0006C17.0123 11.0144 17.0011 11.0256 16.9873 11.0256C16.9735 11.0256 16.9623 11.0144 16.9623 11.0006C16.9623 10.9868 16.9735 10.9756 16.9873 10.9756C17.0011 10.9756 17.0123 10.9868 17.0123 11.0006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chart-average
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chart-average (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chart-average {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chart-average {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chart-average 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chart-average 3s ease-in-out infinite alternate;
}
</style>