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
      <path d="m23.905 12.233-7.672 7.673a.16.16 0 0 1-.115.047h-.048a.162.162 0 0 1-.162-.161v-7.787a.324.324 0 0 1-.094.228L8.188 19.86a.332.332 0 0 1-.466 0L.095 12.235a.332.332 0 0 1 0-.466L7.72 4.142a.334.334 0 0 1 .467 0l7.625 7.625c.06.06.094.143.094.23V4.208c0-.089.073-.162.162-.162h.048c.043 0 .084.018.115.048l7.672 7.672a.333.333 0 0 1 .002.467z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: paysafe
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for paysafe (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-paysafe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-paysafe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-paysafe 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-paysafe 3s ease-in-out infinite alternate;
}
</style>