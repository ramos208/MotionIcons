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
      <path d="M20.01 8.00001L20 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.01 4.00001L20 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.01 4.00001L16 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.01 4.00001L12 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00999 4.00001L7.99999 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 4.00001L3.99999 4.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 8.00001L3.99999 8.01112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 12L3.99999 12.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 16L3.99999 16.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.00999 20L3.99999 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.00999 20L7.99999 20.0111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.01 12.01V20.01H12.01V12.01H20.01Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: corner-bottom-right
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for corner-bottom-right (iconoir). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-corner-bottom-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-corner-bottom-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-corner-bottom-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-corner-bottom-right 2s ease-in-out infinite alternate;
}
</style>