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
      <path d="M14.346 18.205A6.464 6.464 0 0 0 12 5.72a6.462 6.462 0 0 0-2.346 12.485.69.69 0 0 0 .961-.623v-5.4a1.385 1.385 0 1 1 2.77 0v5.4a.692.692 0 0 0 .961.623zm.809 5.558C20.252 22.378 24 17.718 24 12.182c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.536 3.748 10.196 8.845 11.581a.7.7 0 0 0 .049.013l.059.016.001-.002a1.385 1.385 0 0 0 .635-2.695 9.231 9.231 0 1 1 4.824-.001 1.385 1.385 0 0 0 .635 2.695l.001.002.059-.016.049-.013z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qwiklabs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qwiklabs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qwiklabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qwiklabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qwiklabs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qwiklabs 3s ease-in-out infinite alternate;
}
</style>