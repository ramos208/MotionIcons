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
      <path d="M10.494 11.812a2.602 2.602 0 0 0-1.835-.751H3.576L5.46 9.184h4.753a.757.757 0 0 1 .516.234l2.777 2.77a2.602 2.602 0 0 0 1.835.75h5.084l-1.884 1.878h-4.752a.757.757 0 0 1-.516-.235zm1.459 4.083a2.863 2.863 0 0 0 1.835.798h5.506L24 12l-4.706-4.694H16.66l3.764 3.755h-5.082a.99.99 0 0 1-.516-.188l-2.778-2.769a2.863 2.863 0 0 0-1.835-.798H4.706L0 12l4.706 4.693H7.34L3.577 12.94h5.082a.99.99 0 0 1 .516.187z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nederlandsespoorwegen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nederlandsespoorwegen (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nederlandsespoorwegen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nederlandsespoorwegen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nederlandsespoorwegen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nederlandsespoorwegen 3s ease-in-out infinite alternate;
}
</style>