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
      <path d="M6 16C4.58579 16 3.87868 16 3.43934 15.5607C3 15.1213 3 14.4142 3 13V11C3 9.58579 3 8.87868 3.43934 8.43934C3.87868 8 4.58579 8 6 8H18C19.4142 8 20.1213 8 20.5607 8.43934C21 8.87868 21 9.58579 21 11V13C21 14.4142 21 15.1213 20.5607 15.5607C20.1213 16 19.4142 16 18 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 8V2.70711C5 2.31658 5.31658 2 5.70711 2C5.89464 2 6.0745 2.0745 6.20711 2.20711L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 8V2.70711C19 2.31658 18.6834 2 18.2929 2C18.1054 2 17.9255 2.0745 17.7929 2.20711L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.64855 12.9055L12 8L17.3514 12.9055C17.7647 13.2843 18 13.8192 18 14.3798V20.3067C18 20.6896 17.6896 21 17.3067 21C17.1114 21 16.9251 20.9176 16.7937 20.7731L12 15.5L7.20631 20.7731C7.07491 20.9176 6.88864 21 6.6933 21C6.3104 21 6 20.6896 6 20.3067V14.3798C6 13.8192 6.23529 13.2843 6.64855 12.9055Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: perplexity-ai
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for perplexity-ai (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-perplexity-ai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-perplexity-ai {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-perplexity-ai 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-perplexity-ai 2s ease-in-out infinite alternate;
}
</style>