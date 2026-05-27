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
      <path d="M11.2872 8.00018L4.68174 14.6057C4.05287 15.2345 3.72789 16.0522 3.70679 16.8762C3.67836 17.9861 3.66415 18.5411 3.57991 18.7373C3.49566 18.9336 3.30358 19.1257 2.91944 19.5098L2.32535 20.1039C1.89155 20.5377 1.89155 21.241 2.32535 21.6748C2.75915 22.1086 3.46247 22.1086 3.89627 21.6748L4.49036 21.0807C4.87451 20.6966 5.06658 20.5045 5.26283 20.4203C5.45909 20.336 6.01406 20.3218 7.12396 20.2934C7.94797 20.2723 8.76565 19.9473 9.39451 19.3184L11.3227 17.3903M14.4291 14.2839L16 12.713M14.4291 14.2839L12.8582 12.713M14.4291 14.2839L11.3227 17.3903M11.3227 17.3903L9.75177 15.8193" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.068 7.43213L19.5002 8.99992C18.6718 9.82837 18.6718 11.1715 19.5002 12L12 4.49979C12.8285 5.32824 14.1716 5.32824 15.0001 4.49979L16.5679 2.93201C17.8105 1.68933 19.8253 1.68933 21.068 2.93201C22.3107 4.17468 22.3107 6.18946 21.068 7.43213Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dropper
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dropper (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dropper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dropper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dropper 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dropper 3s ease-in-out infinite alternate;
}
</style>