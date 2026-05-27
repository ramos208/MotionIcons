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
      <path d="m6.79652 7.91376 2.52079 4.08625-2.52079 4.08623-4.27103-4.93862.00088 4.93805-2.52138.00057L0 16.0792V7.91376h2.52402l4.27103 4.93864.0003-4.93864m14.85075 2.89478c0-.55173-.27337-.86734-1.0366-.86734h-3.18808v2.31194h3.40456c.59222 0 .82012-.5576.82012-1.04216v-.40244zm-.62975-2.89478C23.41922 7.91376 24 9.10757 24 10.70705v.96034c0 1.2164-.53502 2.61319-2.3231 2.61319h-4.259l.00117 1.80509h-.00117L14.8974 12l2.52079-4.08625h3.59816m-6.74569.0001h-.4614l-1.70183 2.71646-1.70184-2.71645H7.4184l2.52109 4.08596-2.52109 4.08623h2.9872l1.70184-2.71615 1.70183 2.71615h.4664l2.52019-.00029-2.5205-4.08594 2.5208-4.08596h-2.52549z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nxp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nxp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nxp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nxp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nxp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nxp 3s ease-in-out infinite alternate;
}
</style>