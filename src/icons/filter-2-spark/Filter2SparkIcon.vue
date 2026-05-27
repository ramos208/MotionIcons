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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M6 12h9.5"/><path d="M9 18h2.5"/><path d="M19 21.5c.205 -.849 .641 -1.625 1.258 -2.242c.617 -.617 1.393 -1.053 2.242 -1.258c-.849 -.205 -1.625 -.641 -2.242 -1.258c-.617 -.617 -1.053 -1.393 -1.258 -2.242c-.205 .849 -.641 1.625 -1.258 2.242c-.617 .617 -1.393 1.053 -2.242 1.258c.849 .205 1.625 .641 2.242 1.258c.617 .617 1.053 1.393 1.258 2.242"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: filter-2-spark
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for filter-2-spark (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-filter-2-spark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-filter-2-spark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-filter-2-spark 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-filter-2-spark 3s ease-in-out infinite alternate;
}
</style>