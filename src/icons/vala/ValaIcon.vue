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
      <path d="m9.3836 23.9993-.5152-21.859q-2.2504.8435-3.5153 2.64-1.2509 1.7971-1.2509 4.4689 0 .6092.0629 1.0002.0776.3748.156.6092.0783.2188.1411.3438.0777.1249.0777.2188-.828 0-1.4682-.156-.641-.1723-1.0786-.5316-.4222-.3585-.6565-.9529-.2188-.593-.2188-1.4682 0-1.0624.4524-2.0937.4687-1.0306 1.2657-1.9532.8125-.9211 1.891-1.7025 1.0942-.7815 2.328-1.344Q8.3044.6409 9.6484.3289 11.0079 0 12.3519 0q.3593 0 .6565.0155.312.0156.624.0466l.2816 19.687L20.6481.1554h2.2341L13.9924 24H9.3829Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vala
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vala (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vala {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vala {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vala 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vala 3s ease-in-out infinite alternate;
}
</style>