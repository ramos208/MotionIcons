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
      <path d="M4.00047 8.00001L4.01047 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00047 4.00001L4.01047 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00047 4.00001L8.01047 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.0005 4.00001L12.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0005 4.00001L16.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0005 4.00001L20.0105 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0005 8.00001L20.0105 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0005 12L20.0105 12.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0005 16L20.0105 16.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0005 20L20.0105 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0005 20L16.0105 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00047 12.01V20.01H12.0005V12.01H4.00047Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: corner-bottom-left
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for corner-bottom-left (iconoir). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-corner-bottom-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-corner-bottom-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-corner-bottom-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-corner-bottom-left 2s ease-in-out infinite alternate;
}
</style>