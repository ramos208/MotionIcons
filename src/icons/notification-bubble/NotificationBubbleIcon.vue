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
      <path d="M21.5 11.9961C21.5 17.2428 17.2467 21.4961 12 21.4961C10.3446 21.4961 8.78814 21.0727 7.43293 20.3283C6.87976 20.0244 6.22839 19.9176 5.62966 20.1171L3.00001 20.9937L3.87695 18.3629C4.07645 17.7644 3.96974 17.1133 3.66622 16.5603C2.92279 15.2057 2.5 13.6503 2.5 11.9961C2.5 6.74939 6.75329 2.49609 12 2.49609" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.0001 9.49609C19.9331 9.49609 21.5001 7.92909 21.5001 5.99609C21.5001 4.06309 19.9331 2.49609 18.0001 2.49609C16.0671 2.49609 14.5001 4.06309 14.5001 5.99609C14.5001 7.92909 16.0671 9.49609 18.0001 9.49609Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: notification-bubble
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for notification-bubble (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-notification-bubble {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-notification-bubble {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-notification-bubble 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-notification-bubble 3s ease-in-out infinite alternate;
}
</style>