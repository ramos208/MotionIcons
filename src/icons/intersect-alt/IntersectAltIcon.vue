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
      <path d="M15.0098 3.00001L14.9998 3.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.0098 3.00001L10.9998 3.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.00977 3.00001L6.99977 3.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.00977 3.00001L2.99977 3.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.00977 7.00001L2.99977 7.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.00977 11L2.99977 11.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.00977 15L2.99977 15.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 21.01L9.01 20.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 21.01L13.01 20.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 21.01L17.01 20.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21.01L21.01 20.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 17.01L21.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 13.01L21.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9.01L21.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 17L9 10C9 9.44772 9.44772 9 10 9L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7L15 14C15 14.5523 14.5523 15 14 15L7 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: intersect-alt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for intersect-alt (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-intersect-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-intersect-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-intersect-alt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-intersect-alt 3s ease-in-out infinite alternate;
}
</style>