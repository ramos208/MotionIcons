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
      <path d="M6.72682 24c0-.55531-.0434-1.02051.02045-1.46891.0272-.1912.25037-.39595.43237-.51143.88731-.56315 1.85122-1.01275 2.67734-1.65857 2.67584-2.09206 4.26201-4.84612 4.3487-8.42366.02452-1.01583-.34891-1.2696-1.20211-.87389-2.4628 1.1424-5.11119.47263-6.5246-1.65034-1.54137-2.3155-1.32431-5.3984.52253-7.4211 2.359-2.58344 6.24053-2.66074 8.91722-.19346 1.60337 1.47794 2.3652 3.38627 2.5552 5.5569.63691 7.27188-3.01046 13.2657-9.64881 15.89874-.657.26045-1.3307.4744-2.09828.74571"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: comma
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for comma (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-comma {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-comma {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-comma 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-comma 3s ease-in-out infinite alternate;
}
</style>