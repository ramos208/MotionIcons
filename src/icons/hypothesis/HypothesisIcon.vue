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
      <path d="M3.425 0c-.93 0-1.71.768-1.71 1.72v17.14c0 .94.78 1.71 1.71 1.71h5.95l2.62 3.43 2.62-3.43h5.95c.93 0 1.72-.77 1.72-1.71V1.72c0-.95-.79-1.72-1.72-1.72H3.425m1.71 3.43h2.58v6s.86-1.71 2.56-1.71c1.72 0 3.46.85 3.46 3.52v5.9h-2.58V12c0-1.39-.88-1.93-1.73-1.71-.86.21-1.71 1.12-1.71 3v3.85h-2.58V3.43m12.86 10.29c.95 0 1.72.78 1.72 1.7a1.71 1.71 0 01-1.72 1.71 1.71 1.71 0 01-1.71-1.71c0-.92.76-1.71 1.71-1.71z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hypothesis
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hypothesis (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hypothesis {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hypothesis {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hypothesis 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hypothesis 3s ease-in-out infinite alternate;
}
</style>