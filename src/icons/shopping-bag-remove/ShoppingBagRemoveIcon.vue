<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M8 6.5C8 8.15685 9.34315 9.5 11 9.5C12.6569 9.5 14 8.15685 14 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 16.5L21 21.5M16 21.5L21 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.1084 20.5H9.89162C6.02422 20.5 4.09052 20.5 2.89731 19.1594C1.70411 17.8189 1.91058 16.0497 2.32352 12.5113C2.6739 9.50898 3.18586 7.25784 3.66063 5.65851C4.04994 4.34711 4.24459 3.69141 5.04283 3.0957C5.84107 2.5 6.65697 2.5 8.28876 2.5H13.7113C15.3431 2.5 16.159 2.5 16.9572 3.0957C17.7554 3.69141 17.9501 4.34711 18.3394 5.65851C18.8142 7.25784 19.3261 9.50898 19.6765 12.5113C19.7169 12.8574 19.7553 13.1865 19.7906 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shopping-bag-remove
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for shopping-bag-remove (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shopping-bag-remove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shopping-bag-remove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shopping-bag-remove 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shopping-bag-remove 3s ease-in-out infinite alternate;
}
</style>