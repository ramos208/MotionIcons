<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M19 2L19 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 10.01L19.01 9.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 14V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 14V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 17H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 7H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 4V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cpu-warning
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for cpu-warning (iconoir). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-cpu-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cpu-warning {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cpu-warning 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-cpu-warning 2s ease-in-out infinite alternate;
}
</style>