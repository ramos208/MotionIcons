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
      <path d="M176,100a12,12,0,1,1-12-12A12,12,0,0,1,176,100Zm-44,20a12,12,0,1,0,12,12A12,12,0,0,0,132,120Zm84-24A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-16,0a72,72,0,1,0-72,72A72.08,72.08,0,0,0,200,96Zm-34.86,96.53C152,197.56,139.85,200,128,200s-24-2.44-37.14-7.47a8,8,0,1,0-5.72,14.94A125.91,125.91,0,0,0,120,215.68V248a8,8,0,0,0,16,0V215.68a125.91,125.91,0,0,0,34.86-8.21,8,8,0,1,0-5.72-14.94Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: golf
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for golf (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-golf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-golf {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-golf 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-golf 3s ease-in-out infinite alternate;
}
</style>