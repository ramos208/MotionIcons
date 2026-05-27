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
      <path d="M20.01 4L20.01 20L4.00999 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99999 16L4.01111 16.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99999 12L4.01111 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99999 8L4.01111 8.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99999 4L4.01111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 4L16.0111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4L12.0111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99999 4L8.01111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: border-br
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for border-br (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-border-br {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-border-br {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-border-br 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-border-br 3s ease-in-out infinite alternate;
}
</style>