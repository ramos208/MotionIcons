<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-mechanical']"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8h4v4h-4l0 -4"/><path d="M6 4l0 4"/><path d="M6 12l0 8"/><path d="M10 14h4v4h-4l0 -4"/><path d="M12 4l0 10"/><path d="M12 18l0 2"/><path d="M16 5h4v4h-4l0 -4"/><path d="M18 4l0 1"/><path d="M18 9l0 11"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: adjustments-alt
// Category: mechanical
// Physics Presets: Dynamic kinetic adaptation for adjustments-alt (tabler). Selected semantic motion: mechanical with custom idle (ambient-floating) and interaction profile (gear-rotate) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-adjustments-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(90deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-adjustments-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-adjustments-alt 0.45s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-adjustments-alt 3s ease-in-out infinite alternate;
}
</style>