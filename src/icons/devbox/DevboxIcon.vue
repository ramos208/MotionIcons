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
      <path d="m19.546 7.5726-1.531-1.5703c-.4881.4371-.965.8647-1.442 1.2922l-.959.8596c1.3076 1.3446 2.5887 2.6624 3.8756 3.987l-2.4261 2.4956-1.4508 1.4924c.55.4988 1.0916.9897 1.6397 1.4864l.765.6933 2.209-2.2773c1.2588-1.2976 2.5141-2.5916 3.7736-3.8905v-.001a20797.5906 20797.5906 0 0 1-4.454-4.5674ZM2.992 9.0716A16808.14 16808.14 0 0 1 0 12.141c2.0108 2.0727 3.9927 4.1152 5.9838 6.1666l.5111-.4635c.638-.5786 1.2616-1.144 1.8924-1.715l-1.447-1.4888c-.8134-.8368-1.6208-1.6676-2.431-2.5015 1.0462-1.075 2.0745-2.132 3.1094-3.1959l.7674-.7888c-.4342-.3892-.861-.7718-1.2883-1.1546l-1.114-.9983v.0011c-.9996 1.0251-1.9958 2.0472-2.992 3.0694Zm12.585-6.0372c-1.317 6.199-2.6283 12.3689-3.9453 18.5656l-.1962-.0387a2911.4317 2911.4317 0 0 0-3.0284-.5957c.8529-4.0118 1.7034-8.0133 2.5549-12.0196L12.3533 2.4z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: devbox
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for devbox (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-devbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-devbox {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-devbox 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-devbox 3s ease-in-out infinite alternate;
}
</style>