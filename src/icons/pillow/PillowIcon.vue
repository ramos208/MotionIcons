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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9a9.34 9.34 0 0 1 0 6"/><path d="M21.699 16.607c.481 .934 .28 2.088 -.486 2.79c-.767 .703 -1.9 .77 -2.74 .165a48 48 0 0 1 -12.946 0a2.16 2.16 0 0 1 -2.74 -.165a2.345 2.345 0 0 1 -.486 -2.79a41.7 41.7 0 0 1 0 -9.163a2.346 2.346 0 0 1 .433 -2.856a2.16 2.16 0 0 1 2.793 -.145a48 48 0 0 1 12.946 0a2.16 2.16 0 0 1 2.793 .145c.78 .726 .961 1.918 .433 2.856a41.7 41.7 0 0 1 0 9.163"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pillow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pillow (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pillow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pillow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pillow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pillow 3s ease-in-out infinite alternate;
}
</style>