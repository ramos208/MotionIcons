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
      <path d="M3 7.67122C3 5.99755 4.47444 4.34363 5.50935 3.38889C6.0714 2.87037 6.9286 2.87037 7.49065 3.38889C8.52556 4.34363 10 5.99755 10 7.67122C10 9.31217 8.67462 11 6.5 11C4.32538 11 3 9.31217 3 7.67122Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 17.6712C8.5 15.9975 9.97444 14.3436 11.0093 13.3889C11.5714 12.8704 12.4286 12.8704 12.9907 13.3889C14.0256 14.3436 15.5 15.9975 15.5 17.6712C15.5 19.3122 14.1746 21 12 21C9.82538 21 8.5 19.3122 8.5 17.6712Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 7.67122C14 5.99755 15.4744 4.34363 16.5093 3.38889C17.0714 2.87037 17.9286 2.87037 18.4907 3.38889C19.5256 4.34363 21 5.99755 21 7.67122C21 9.31217 19.6746 11 17.5 11C15.3254 11 14 9.31217 14 7.67122Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rain
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for rain (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rain {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rain 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rain 3s ease-in-out infinite alternate;
}
</style>