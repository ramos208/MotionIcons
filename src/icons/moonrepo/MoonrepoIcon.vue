<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M 19.514 7.342 C 19.711 7.862 19.814 8.413 19.816 8.969 C 19.816 12.494 15.998 14.697 12.946 12.934 C 11.529 12.116 10.657 10.605 10.657 8.969 C 10.657 5.646 14.085 3.431 17.115 4.793 C 15.26 3.373 12.99 2.607 10.655 2.612 C 4.772 2.614 0.005 7.381 0 13.265 C 0.002 19.148 4.772 23.918 10.655 23.92 C 16.538 23.916 21.306 19.147 21.31 13.265 C 21.312 11.155 20.687 9.095 19.514 7.342 Z M 14.841 4.666 C 14.841 8.191 18.657 10.395 21.709 8.632 C 23.127 7.814 24 6.302 24 4.666 C 24 1.14 20.184 -1.061 17.13 0.699 C 15.714 1.519 14.841 3.03 14.841 4.666"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moonrepo
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for moonrepo (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moonrepo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moonrepo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moonrepo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moonrepo 3s ease-in-out infinite alternate;
}
</style>