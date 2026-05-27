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
      <path d="m12 9.103-9.76 9.768c-.376-.553-.725-1.123-.998-1.738l9.39-9.397L12 6.368l1.368 1.368 6.931 6.931-.01.035-.136.403-.156.393-.174.384-.192.374-.175.304L12 9.103zM12 0C5.39 0 0 5.39 0 12c0 1.306.211 2.563.6 3.741l.893-.893.668-.67A10.039 10.039 0 0 1 1.922 12C1.922 6.45 6.45 1.922 12 1.922S22.078 6.449 22.078 12c0 5.55-4.527 10.078-10.078 10.078a10.06 10.06 0 0 1-7.698-3.588l-.012.012-.309.309-.308.309-.308.308-.424.425C5.144 22.39 8.39 24 12.001 24 18.61 24 24 18.61 24 12S18.61 0 12 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: openhab
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for openhab (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-openhab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-openhab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-openhab 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-openhab 3s ease-in-out infinite alternate;
}
</style>