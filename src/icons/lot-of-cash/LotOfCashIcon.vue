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
      <path d="M4 18V10C4 8.89543 4.89543 8 6 8H11.2H14.8H20C21.1046 8 22 8.89543 22 10V18C22 19.1046 21.1046 20 20 20H14.8H11.2H6C4.89543 20 4 19.1046 4 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 14.01L18.51 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 14.01L7.51 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16H3C1.89543 16 1 15.1046 1 14V6C1 4.89543 1.89543 4 3 4H17C18.1046 4 19 4.89543 19 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 16C11.8954 16 11 15.1046 11 14C11 12.8954 11.8954 12 13 12C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lot-of-cash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lot-of-cash (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lot-of-cash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lot-of-cash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lot-of-cash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lot-of-cash 3s ease-in-out infinite alternate;
}
</style>