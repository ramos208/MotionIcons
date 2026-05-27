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
      <path d="M20.0029 15.0004C20.0029 15.0004 22.0019 13.5274 22.0019 13.0004C22.0019 12.4733 20.0029 11.0004 20.0029 11.0004M21.7771 12.8677C20.3654 13.1577 17.7194 13.2702 16.4089 10.8165C15.8656 9.95293 15.9675 8.50693 15.9675 6.8613C15.9336 6.19049 15.3622 4.97019 13.93 5.00081C12.4979 5.03143 12.0277 6.20757 11.9716 6.79182V16.9024C11.9861 17.7541 11.4924 18.9995 9.97603 18.9995C8.49556 18.9995 7.91604 17.6875 8.04374 16.7039C8.38959 14.0398 7.58132 11.2475 4.08109 11.0033H1.99707" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: curvy-right-direction
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for curvy-right-direction (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-curvy-right-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-curvy-right-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-curvy-right-direction 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-curvy-right-direction 3s ease-in-out infinite alternate;
}
</style>