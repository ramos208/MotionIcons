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
      <path d="M8.206 5.866l.005.396H6.754l.006.655v.005l-6.758.002v.211L0 7.973l.02.041c.212.467.663.901 1.257 1.313.594.411 1.335.796 2.145 1.13 1.62.664 3.502 1.12 5.006 1.1.746-.01 1.265.228 1.62.672.341.426.51 1.092.524 1.92L7.94 16.239l.008 1.896H20.29l-.004-1.76-2.63-2.22c.055-2.013.708-3.443 1.777-4.405 1.087-.979 2.61-1.49 4.37-1.616l.195-.015L24 5.872zm.425.422l14.946.006-.004 1.457c-1.737.155-3.29.666-4.424 1.685-.912.822-1.433 2.062-1.691 3.534l-1.617.004.002.422 1.535-.004c-.027.226-.113.4-.123.64l-.893-.003-.002.422.995.004 2.138 1.802-2.941.002c-.724-.675-1.552-1.116-2.416-1.158-.817-.04-1.638.324-2.387 1.04l-2.978-.024 2.248-1.781v-.102c.002-.943-.2-1.72-.64-2.269-.396-.496-1.007-.749-1.741-.79l-.008-4.49h.008zm-1.45.396h1.026l.008 4.404c-1.387-.02-3.125-.404-4.631-1.023-.787-.324-1.507-.698-2.066-1.086C.968 8.6.587 8.203.424 7.86v-.514l6.336-.002v2.16h.422v-2.16h.004l-.004-.435v-.226zm6.935 8.839c.75.037 1.503.436 2.18 1.078l-.002 1.112h-4.345l-.006-1.2c.706-.717 1.443-1.026 2.173-.99zM8.36 16.537l3.16.023.006 1.153h-3.16zm11.5.142l.002 1.034h-3.148V16.68z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: condaforge
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for condaforge (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-condaforge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-condaforge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-condaforge 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-condaforge 3s ease-in-out infinite alternate;
}
</style>