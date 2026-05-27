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
      <path d="M7 19.4V4.6C7 4.26863 7.26863 4 7.6 4H16.4C16.7314 4 17 4.26863 17 4.6V19.4C17 19.7314 16.7314 20 16.4 20H7.6C7.26863 20 7 19.7314 7 19.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 20V22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 20V22.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 4V1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 4V1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 12H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 12H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 6.5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 6.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17.5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 17.5H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: electronics-chip
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for electronics-chip (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-electronics-chip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-electronics-chip {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-electronics-chip 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-electronics-chip 3s ease-in-out infinite alternate;
}
</style>