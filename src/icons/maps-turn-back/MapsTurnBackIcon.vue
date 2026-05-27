<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M4.36463 19.787L11.6678 13.2953C11.8573 13.1269 12.1427 13.1269 12.3322 13.2953L19.6354 19.787C20.0155 20.1249 19.707 20.7486 19.2078 20.6515L12.0954 19.2686C12.0324 19.2563 11.9676 19.2563 11.9046 19.2686L4.79225 20.6515C4.29295 20.7486 3.98446 20.1249 4.36463 19.787Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 11C5.5 7.5 5.5 6 5.5 6V6C5.5 6 5.5 2.5 8.5 2.5C12 2.5 12 6 12 6V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 7.5C7.63317 8.86683 6.86683 9.63317 5.5 11C4.13317 9.63317 3.36683 8.86683 2 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: maps-turn-back
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for maps-turn-back (iconoir). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-maps-turn-back {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-maps-turn-back {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-maps-turn-back 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-maps-turn-back 3s ease-in-out infinite alternate;
}
</style>