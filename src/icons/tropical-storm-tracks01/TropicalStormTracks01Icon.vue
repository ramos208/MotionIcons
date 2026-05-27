<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M18.1649 15.3478L18.6279 14.1905C18.6279 14.1905 19.2789 14.8144 20.0122 15.5181C20.8638 16.3354 21.2896 16.744 21.6142 16.5584C21.9388 16.3728 21.8076 15.8193 21.545 14.7124C21.1458 13.0294 20.535 11.4 19.7246 9.86371C18.7709 8.05838 17.2258 6.63559 15.3481 5.83366L14.1904 5.37071C14.1904 5.37071 14.7811 4.75416 15.4628 4.04374C16.3007 3.17052 16.7197 2.73392 16.5354 2.40972C16.3511 2.08552 15.7797 2.21794 14.6369 2.48276C12.6305 2.94773 10.3703 3.74969 8.57135 5.13267C7.35643 6.03539 6.40993 7.25159 5.83324 8.65101L5.37037 9.80835C5.37037 9.80835 4.75494 9.2189 4.04536 8.53818C3.17093 7.69932 2.73371 7.2799 2.40955 7.4642C2.08538 7.64851 2.21798 8.22053 2.48318 9.36456C2.9566 11.4068 3.77916 13.7115 5.20826 15.5252C6.10132 16.695 7.28946 17.6063 8.65084 18.1655L9.80903 18.6289C9.80903 18.6289 9.18487 19.2799 8.48107 20.0131C7.66462 20.8637 7.2564 21.289 7.44197 21.6136C7.62754 21.9383 8.18048 21.8072 9.28635 21.545C10.9527 21.15 12.5669 20.548 14.0906 19.7506C15.9161 18.7971 17.3556 17.2416 18.1649 15.3478Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tropical-storm-tracks01
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for tropical-storm-tracks01 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tropical-storm-tracks01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tropical-storm-tracks01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tropical-storm-tracks01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tropical-storm-tracks01 3s ease-in-out infinite alternate;
}
</style>