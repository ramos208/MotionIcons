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
      <path d="M15.463 3.923c0 .637.517 1.154 1.154 1.154h4.376c.515 0 .772.62.408.984l-5.6 5.601c-.217.216-.34.51-.34.816v1.915c0 .797.79 1.35 1.49.97.71-.386 1.371-.853 1.972-1.392a.603.603 0 0 1 .828.012l4.08 4.08a.56.56 0 0 1-.007.808A17.25 17.25 0 0 1 12 23.54 17.25 17.25 0 0 1 .176 18.872a.56.56 0 0 1-.006-.81l4.08-4.078a.604.604 0 0 1 .827-.012 10.4 10.4 0 0 0 1.973 1.39c.7.38 1.488-.171 1.488-.968v-1.915c0-.307-.122-.6-.339-.816L2.6 6.061a.576.576 0 0 1 .408-.984h4.376c.637 0 1.154-.517 1.154-1.154V1.038c0-.32.258-.577.577-.577h5.77c.318 0 .576.258.576.577v2.885z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: oxc
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for oxc (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-oxc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-oxc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-oxc 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-oxc 3s ease-in-out infinite alternate;
}
</style>