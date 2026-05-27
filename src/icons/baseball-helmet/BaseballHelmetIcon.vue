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
      <path d="M19.5 8.5C18 5 14.9924 3 11.4046 3C6.21058 3 2 7.24151 2 12.4737C2 15.8912 3.79635 18.886 6.48977 20.5523C7.06928 20.9108 7.54664 21 8.22657 21H14.763C16.1727 21 17.3155 19.8807 17.3155 18.5C17.3155 17.1193 16.1727 16 14.763 16C14.3687 16 13.6311 16.1485 13.3534 15.8267C13.2038 15.6533 13.2359 15.4366 13.3 15.0031C13.7388 12.0363 16.2376 11.5 19.4564 11.5C20.2168 11.5 20.9772 10.655 21.5235 9.86188C21.9052 9.30765 22.096 9.03053 21.952 8.76527C21.808 8.5 21.4444 8.5 20.7171 8.5H19.5ZM19.5 8.5H15.0693" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.0078 18.5L14.9988 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: baseball-helmet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for baseball-helmet (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-baseball-helmet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-baseball-helmet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-baseball-helmet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-baseball-helmet 3s ease-in-out infinite alternate;
}
</style>