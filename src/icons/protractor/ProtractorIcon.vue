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
      <path d="M12 0C5.37 0 0 5.372 0 12s5.371 12 12 12c6.628 0 12-5.372 12-12S18.627 0 12 0zm-.273 3.789v1.71h.545v-1.71a9.055 9.055 0 015.961 2.468l-1.277 1.278.386.386 1.277-1.278a9.057 9.057 0 012.469 5.96h-1.71v.546h1.717v2.001H2.905v-2H4.62v-.546h-1.71a9.058 9.058 0 012.469-5.96L6.658 7.92l.386-.386-1.278-1.278a9.056 9.056 0 015.96-2.468zM12 6.965a5.912 5.912 0 00-5.913 5.912h11.824A5.91 5.91 0 0012 6.965z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: protractor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for protractor (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-protractor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-protractor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-protractor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-protractor 3s ease-in-out infinite alternate;
}
</style>