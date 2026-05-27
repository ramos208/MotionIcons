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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3"/><path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3"/><path d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6"/><path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0"/><path d="M17 3c0 1.333 -.333 2.333 -1 3"/><path d="M7 3c0 1.333 .333 2.333 1 3"/><path d="M7 6c-2.667 .667 -4.333 1.667 -5 3"/><path d="M17 6c2.667 .667 4.333 1.667 5 3"/><path d="M8.5 10l-1.5 -1"/><path d="M15.5 10l1.5 -1"/><path d="M12 15h.01"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: deer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for deer (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-deer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-deer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-deer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-deer 3s ease-in-out infinite alternate;
}
</style>