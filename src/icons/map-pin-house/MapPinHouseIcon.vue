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
      <path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.3547 16.4469L18.8796 14.3254C18.6347 14.1154 18.3226 14 18 14C17.6774 14 17.3653 14.1154 17.1204 14.3254L14.6453 16.4469C14.2357 16.7979 14 17.3105 14 17.8499V18.5752C14 19.9081 14 20.5746 14.305 21.0616C14.4655 21.3179 14.6821 21.5345 14.9384 21.695C15.4254 22 16.0919 22 17.4248 22H18.5752C19.9081 22 20.5746 22 21.0616 21.695C21.3179 21.5345 21.5345 21.3179 21.695 21.0616C22 20.5746 22 19.9081 22 18.5752V17.8499C22 17.3105 21.7643 16.7979 21.3547 16.4469Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 10.0355C18 5.59762 14.4183 2 10 2C5.58172 2 2 5.59762 2 10.0355C2 12.5731 3 14.5462 5 16.3086C6.07535 17.2562 7.82291 19.0316 9.04653 20.5628C9.27943 20.8543 9.63972 21 10 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: map-pin-house
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for map-pin-house (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-map-pin-house {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-map-pin-house {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-map-pin-house 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-map-pin-house 3s ease-in-out infinite alternate;
}
</style>