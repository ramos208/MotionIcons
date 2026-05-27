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
      <path d="M2 18V12C2 11.535 2 11.3025 2.05111 11.1118C2.18981 10.5941 2.59413 10.1898 3.11177 10.0511C3.30252 10 3.53501 10 4 10C4.46499 10 4.69748 10 4.88823 10.0511C5.40587 10.1898 5.81019 10.5941 5.94889 11.1118C6 11.3025 6 11.535 6 12V18C6 18.465 6 18.6975 5.94889 18.8882C5.81019 19.4059 5.40587 19.8102 4.88823 19.9489C4.69748 20 4.46499 20 4 20C3.53501 20 3.30252 20 3.11177 19.9489C2.59413 19.8102 2.18981 19.4059 2.05111 18.8882C2 18.6975 2 18.465 2 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 11H7.76845C8.58101 11 9.38511 11.165 10.132 11.4851L14.8574 13.5103C15.5506 13.8074 16 14.489 16 15.2431C16 15.9373 15.4373 16.5 14.7431 16.5H14.0986C13.3729 16.5 12.6538 16.3615 11.98 16.092L10.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 16.5H20.5749C21.362 16.5 22 17.138 22 17.9251C22 18.5613 21.5782 19.1205 20.9664 19.2953L15.7451 20.7871C15.2508 20.9283 14.7392 21 14.2251 21C13.7437 21 13.2645 20.9372 12.7994 20.8132L6 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-coins
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-coins (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-coins {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-coins {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-coins 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-coins 3s ease-in-out infinite alternate;
}
</style>