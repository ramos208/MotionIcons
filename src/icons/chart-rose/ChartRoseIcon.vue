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
      <path d="M9.713 7.97461C6.60492 7.97461 4.08533 10.2303 4.08533 13.0129H9.713V7.97461Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.53453 15.926C3.77319 18.368 6.52105 20.0662 9.71196 20.0662L9.71196 13.0127H4.87217C3.40834 13.0127 2.67643 13.0127 2.23141 13.7319C1.78639 14.4511 2.03577 14.9427 2.53453 15.926Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.7145 21.6766C16.8431 20.5311 19.8419 17.0854 19.8419 13.0127H9.7121V19.0586C9.7121 20.5322 9.7121 21.269 10.3127 21.7226C10.9134 22.1763 11.5137 22.0097 12.7145 21.6766Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.6409 10.0343C20.4534 6.21439 17.0381 3.22528 12.7271 2.25958C11.4776 1.97968 10.8528 1.83973 10.2825 2.29354C9.7121 2.74735 9.7121 3.48208 9.7121 4.95155V13.0127H19.054C20.5339 13.0127 21.2738 13.0127 21.7293 12.3984C22.1848 11.784 22.0035 11.2008 21.6409 10.0343Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chart-rose
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chart-rose (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chart-rose {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chart-rose {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chart-rose 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chart-rose 3s ease-in-out infinite alternate;
}
</style>