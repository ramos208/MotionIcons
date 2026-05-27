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
      <path d="M10.846 8.886L24 2.932v13.82L9.621 21.068 0 14.09l3.35-9.956 7.496 4.751v.001zm-4.582 2.067l3.923-1.768-6.065-3.85 2.142 5.618zm-5.393 2.44l4.842-2.187-2.179-5.717-2.662 7.904H.871zm22.526 2.54V4.256l-5.96 7.37 5.96 4.307zm-12.865 4.233l12.497-3.758-5.973-4.316-6.524 8.074zM.94 14.029l8.092 5.867-3.106-8.124L.94 14.029zm21.722-9.826c-5.085 2.296-10.163 4.6-15.25 6.895l9.445.284 5.805-7.178v-.001zM9.775 20.143l6.608-8.173-9.844-.29 3.236 8.462v.001z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: checkio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for checkio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-checkio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-checkio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-checkio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-checkio 3s ease-in-out infinite alternate;
}
</style>