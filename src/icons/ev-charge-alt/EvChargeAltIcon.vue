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
      <path d="M22 5L20 9L18 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5H14V9L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 7H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9V19C6 20.1046 6.89543 21 8 21H17C18.1046 21 19 20.1046 19 19V14" stroke="currentColor" stroke-linecap="round"/><path d="M9 5.6V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5.6C3 5.26863 3.26863 5 3.6 5H8.4C8.73137 5 9 5.26863 9 5.6Z" stroke="currentColor" stroke-linecap="round"/><path d="M4 5V3" stroke="currentColor" stroke-linecap="round"/><path d="M8 5V3" stroke="currentColor" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ev-charge-alt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ev-charge-alt (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ev-charge-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ev-charge-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ev-charge-alt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ev-charge-alt 3s ease-in-out infinite alternate;
}
</style>