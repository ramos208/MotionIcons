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
      <path d="M1 21L4.14286 3H19.8571L23 21H1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 16.5H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 3.5L6.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.5L17.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: perspective-view
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for perspective-view (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-perspective-view {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-perspective-view {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-perspective-view 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-perspective-view 3s ease-in-out infinite alternate;
}
</style>