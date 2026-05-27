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
      <path d="M2 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 4L19 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16.01L3.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.0098 16.01L20.9998 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.0098 12.01L19.9998 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 8.01L5.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.0098 8.01L18.9998 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7V17M12 7L10.5 8.5M12 7L13.5 8.5M12 17L9 14M12 17L15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: depth
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for depth (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-depth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-depth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-depth 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-depth 3s ease-in-out infinite alternate;
}
</style>