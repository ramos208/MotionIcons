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
      <path d="m19.32 6.076 3.567 6.164A8.835 8.835 0 0 1 24 16.255C24 20.76 20.455 24 15.425 24h-6.85C3.545 24 0 20.76 0 16.255a8.925 8.925 0 0 1 1.102-4.015l3.567-6.164h3.349L3.84 13.342a6.033 6.033 0 0 0-.829 2.869c0 2.869 1.964 4.909 5.651 4.909h6.654c3.709 0 5.662-2.04 5.662-4.909a6.043 6.043 0 0 0-.829-2.869l-4.167-7.266h3.338Zm-8.444 11.509c-1.581 0-2.531-.927-2.531-2.236 0-1.789 1.822-3.349 3.819-3.785L7.473 0h8.182l1.505 2.891h-5.727l3.414 8.345c.295.655.448 1.364.448 2.073 0 2.476-2.455 4.276-4.419 4.276Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bandlab
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bandlab (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bandlab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bandlab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bandlab 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bandlab 3s ease-in-out infinite alternate;
}
</style>