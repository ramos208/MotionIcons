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
      <path d="M12 0C5.383 0 0 5.382 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 1.799A10.19 10.19 0 0 1 22.207 12 10.19 10.19 0 0 1 12 22.201 10.186 10.186 0 0 1 1.799 12 10.186 10.186 0 0 1 12 1.799zm4.016 5.285c-.49-.018-1.232.368-1.899 1.031l-1.44 1.43-4.31-1.447-.842.867 3.252 2.47-.728.723a4.747 4.747 0 0 0-.639.787L7.451 12.8l-.476.484 1.947 1.444 1.424 1.943.48-.48-.144-1.98c.246-.16.497-.361.74-.603l.765-.76 2.495 3.274.869-.84-1.455-4.332 1.394-1.385c.89-.885 1.298-1.92.918-2.322a.547.547 0 0 0-.392-.158z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cockpit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cockpit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cockpit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cockpit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cockpit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cockpit 3s ease-in-out infinite alternate;
}
</style>