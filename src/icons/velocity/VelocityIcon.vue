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
      <path d="m7.623 6.719-4.752.959a.65.65 0 0 0-.44.324L.083 12.248a.65.65 0 0 0 .045.701l2.986 4.076a.66.66 0 0 0 .657.256l4.736-.957a.65.65 0 0 0 .363-.215h11.694a.542.542 0 0 0 0-1.084h-2.95a.53.53 0 0 1-.394-.152.545.545 0 0 1 0-.78.55.55 0 0 1 .394-.152h5.875a.53.53 0 0 0 .512-.33v-.422a.53.53 0 0 0-.512-.33h-9.79a.547.547 0 0 1-.544-.543.54.54 0 0 1 .543-.54h5.85a.544.544 0 0 0 .525-.542.54.54 0 0 0-.525-.543H15.68a.54.54 0 1 1 0-1.082h5.86a.546.546 0 0 0 .524-.543.54.54 0 0 0-.525-.54H9.416L8.279 6.972a.65.65 0 0 0-.656-.254M7.576 7.77a.527.527 0 0 1 .207.715l-1.451 2.631a.88.88 0 0 0 .059.945L8.1 14.39a.528.528 0 0 1-.854.623l-1.709-2.326a.88.88 0 0 0-.88-.344l-2.897.586a.523.523 0 0 1-.621-.412.525.525 0 0 1 .41-.621l3.14-.635a.9.9 0 0 0 .596-.438l1.576-2.845a.524.524 0 0 1 .715-.206m13.608 2.92a.54.54 0 1 0-.001 1.082.54.54 0 0 0 0-1.082"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: velocity
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for velocity (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-velocity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-velocity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-velocity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-velocity 3s ease-in-out infinite alternate;
}
</style>