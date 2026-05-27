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
      <path d="M0 0v24h24V0H0zm3.006 3.236h1.52v5.051a1.007 1.007 0 1 0 2.014 0v-5.05h1.517v5.056a2.525 2.525 0 1 1-5.051 0V3.236zm7.07 0h1.514l2.023 4.328V3.236h1.516v7.575h-1.516L11.59 6.482v4.329h-1.514V3.236zm7.569.01h1.488v7.576h-1.488V3.246zM5.533 13.078a2.526 2.526 0 0 1 2.524 2.53v2.523a2.51 2.51 0 0 1-.75 1.793l.75 2.248H6.539l-.518-1.563a2.472 2.472 0 0 1-.488.043 2.524 2.524 0 0 1-2.527-2.521v-2.524a2.527 2.527 0 0 1 2.527-2.529zm4.547 0h1.514v6.057h3.535v1.517H10.08v-7.574zm8.336 0a2.526 2.526 0 0 1 2.523 2.53v2.523a2.525 2.525 0 0 1-2.523 2.521 2.53 2.53 0 0 1-2.531-2.521v-2.524a2.533 2.533 0 0 1 2.531-2.529zm-12.88 1.52a1.007 1.007 0 0 0-1.01 1.01v2.523c0 .552.45 1.006 1.01 1.006.558 0 1.003-.454 1.003-1.006v-2.524c0-.559-.445-1.01-1.004-1.01zm12.88 0a1.01 1.01 0 0 0-1.012 1.01v2.523c0 .552.453 1.006 1.012 1.006a1.012 1.012 0 0 0 1.01-1.006v-2.524c0-.559-.455-1.01-1.01-1.01z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: uniqlo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for uniqlo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-uniqlo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-uniqlo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-uniqlo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-uniqlo 3s ease-in-out infinite alternate;
}
</style>