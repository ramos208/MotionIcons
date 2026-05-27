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
      <path d="M2.99219 6H5.99219M8.99219 6H5.99219M5.99219 6V3M5.99219 6V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.11169 13.5C2.83542 18.3113 6.98691 22 11.9999 22C17.5228 22 21.9999 17.5229 21.9999 12C21.9999 6.98697 18.3112 2.83548 13.4999 2.11176" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.1973 9C17.0976 8.82774 16.9896 8.66089 16.8739 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.811 13.5C17.2683 15.6084 15.6084 17.2683 13.5 17.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lens-plus
// Category: search
// Physics Presets: Dynamic kinetic adaptation for lens-plus (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lens-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lens-plus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lens-plus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lens-plus 3s ease-in-out infinite alternate;
}
</style>