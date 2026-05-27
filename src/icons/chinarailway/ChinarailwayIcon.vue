<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M15.642 18.64a8.035 8.035 0 1 0-7.284 0l-1.476 1.932a10.435 10.435 0 0 1 3.136-19.339 1.043 1.043 0 0 1 .939-1.186 11.478 11.478 0 0 1 2.086 0 1.043 1.043 0 0 1 .939 1.186 10.435 10.435 0 0 1 3.136 19.339zm2.805 4.04a.417.417 0 0 1 .336.41V24H5.217v-.91a.417.417 0 0 1 .336-.41l4.438-.887a1.46 1.46 0 0 0 1.174-1.432v-5.934a1.043 1.043 0 0 0-.757-1.003l-2.06-.59V10.94a1.46 1.46 0 0 1 1.345-1.456 29.217 29.217 0 0 1 4.614 0 1.46 1.46 0 0 1 1.345 1.456v1.896l-2.06.589a1.043 1.043 0 0 0-.757 1.003v5.934a1.46 1.46 0 0 0 1.174 1.432z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chinarailway
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for chinarailway (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-chinarailway {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chinarailway {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chinarailway 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-chinarailway 2s ease-in-out infinite alternate;
}
</style>