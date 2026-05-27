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
      <path d="M13 4.5C13 5.32843 12.3284 6 11.5 6C10.6716 6 10 5.32843 10 4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329M18 8.34546L16.2639 9.34233C15.3862 9.84631 14.9473 10.0983 14.4623 10.1209C13.9774 10.1434 13.5172 9.93325 12.5969 9.5129L11.8137 9.15516M8.9329 14.9258H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516M8.9329 14.9258C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workout-squats
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workout-squats (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workout-squats {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workout-squats {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workout-squats 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workout-squats 3s ease-in-out infinite alternate;
}
</style>