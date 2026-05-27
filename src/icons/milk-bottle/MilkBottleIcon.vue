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
      <path d="M14.7273 5C15.631 5 16.3636 4.32843 16.3636 3.5C16.3636 2.67157 15.631 2 14.7273 2H9.27273C8.36899 2 7.63636 2.67157 7.63636 3.5C7.63636 4.32843 8.36899 5 9.27273 5M15.2459 4.92311C16.8664 7.89408 18 10.3773 18 13.7771V18C18 21.3093 17.2465 22 13.6364 22H10.3636C6.75345 22 6 21.3093 6 18V13.7771C6 10.3773 7.10674 7.88562 8.72727 4.91465" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12C6.57143 12.5 8.09206 12.4761 8.98433 12.2789C9.60646 12.1415 10.2768 12.3027 10.6984 12.7639L11.523 13.6658C11.9973 14.1846 12.7163 14.4309 13.4245 14.3173L14.4681 14.1499C15.0422 14.0578 15.6132 14.2904 16.004 14.7055C17.2226 16 18 16 18 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: milk-bottle
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for milk-bottle (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-milk-bottle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-milk-bottle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-milk-bottle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-milk-bottle 2s ease-in-out infinite alternate;
}
</style>