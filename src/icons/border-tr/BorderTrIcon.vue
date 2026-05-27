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
      <path d="M20.0098 20L20.0098 4L4.00977 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99977 8L4.01088 7.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99977 12L4.01088 11.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99977 16L4.01088 15.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.99977 20L4.01088 19.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9998 20L16.0109 19.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9998 20L12.0109 19.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.99977 20L8.01088 19.99" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: border-tr
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for border-tr (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-border-tr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-border-tr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-border-tr 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-border-tr 3s ease-in-out infinite alternate;
}
</style>