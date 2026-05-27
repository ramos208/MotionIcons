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
      <path d="M15.1024 16.7446C17.8895 13.7178 19.8287 11.3284 21.04 9.70091C21.703 8.81007 22.0345 8.36466 21.9972 7.75756C21.9193 6.48963 18.7253 3 17.3204 3C16.6774 3 16.16 3.53734 15.1252 4.61201L2.54984 17.6718C1.81672 18.4331 1.81672 19.6675 2.54984 20.4289C3.381 21.2921 4.76287 21.1587 5.42662 20.1512L7.71648 16.6756C8.63465 15.282 9.29389 15.2741 10.3945 16.4171C11.0597 17.108 11.9005 18.395 12.9477 18.3828C13.6008 18.3753 14.1013 17.8317 15.1024 16.7446Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.125 8H18M18.25 8C18.25 8.13807 18.1381 8.25 18 8.25C17.8619 8.25 17.75 8.13807 17.75 8C17.75 7.86193 17.8619 7.75 18 7.75C18.1381 7.75 18.25 7.86193 18.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: knife01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for knife01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-knife01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-knife01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-knife01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-knife01 3s ease-in-out infinite alternate;
}
</style>