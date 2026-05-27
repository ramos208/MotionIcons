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
      <path d="M5 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 13V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 8V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 5V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 8.6V13.4C7 13.7314 6.73137 14 6.4 14H3.6C3.26863 14 3 13.7314 3 13.4V8.6C3 8.26863 3.26863 8 3.6 8H6.4C6.73137 8 7 8.26863 7 8.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 13.6V18.4C14 18.7314 13.7314 19 13.4 19H10.6C10.2686 19 10 18.7314 10 18.4V13.6C10 13.2686 10.2686 13 10.6 13H13.4C13.7314 13 14 13.2686 14 13.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 5.6V10.4C21 10.7314 20.7314 11 20.4 11H17.6C17.2686 11 17 10.7314 17 10.4V5.6C17 5.26863 17.2686 5 17.6 5H20.4C20.7314 5 21 5.26863 21 5.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: candlestick-chart
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for candlestick-chart (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-candlestick-chart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-candlestick-chart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-candlestick-chart 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-candlestick-chart 3s ease-in-out infinite alternate;
}
</style>