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
      <path d="M18 11.5V15C18 18.2998 18 19.9497 16.9749 20.9749C15.9497 22 14.2998 22 11 22C7.70017 22 6.05025 22 5.02513 20.9749C4 19.9497 4 18.2998 4 15V9C4 5.70017 4 4.05025 5.02513 3.02513C6.05025 2 7.70017 2 11 2C11.7473 2 11.41 2 12 2.01191" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.125 18.75H11M11.25 18.75C11.25 18.8881 11.1381 19 11 19C10.8619 19 10.75 18.8881 10.75 18.75C10.75 18.6119 10.8619 18.5 11 18.5C11.1381 18.5 11.25 18.6119 11.25 18.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.9737 2.02148C16.9795 1.99284 17.0205 1.99284 17.0263 2.02148C17.3302 3.50808 18.4919 4.66984 19.9785 4.97368C20.0072 4.97954 20.0072 5.02046 19.9785 5.02632C18.4919 5.33016 17.3302 6.49192 17.0263 7.97852C17.0205 8.00716 16.9795 8.00716 16.9737 7.97852C16.6698 6.49192 15.5081 5.33016 14.0215 5.02632C13.9928 5.02046 13.9928 4.97954 14.0215 4.97368C15.5081 4.66984 16.6698 3.50808 16.9737 2.02148Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ai-phone01
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for ai-phone01 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ai-phone01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ai-phone01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ai-phone01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-ai-phone01 2s ease-in-out infinite alternate;
}
</style>