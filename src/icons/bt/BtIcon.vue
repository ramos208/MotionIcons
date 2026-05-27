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
      <path d="M12.589 7.91h5.977v1.753H16.56v6.41h-1.97v-6.41h-2zM12 22.523C6.193 22.523 1.477 17.807 1.477 12 1.477 6.193 6.193 1.477 12 1.477c5.807 0 10.523 4.716 10.523 10.523 0 5.807-4.716 10.523-10.523 10.523M12 24c6.626 0 12-5.374 12-12S18.626 0 12 0C5.379 0 0 5.374 0 12s5.379 12 12 12M9.97 13.574c0-.516-.321-.865-.873-.865h-1.32v1.702h1.32c.552 0 .874-.345.874-.837m-.24-3.276c0-.433-.275-.732-.745-.732h-1.21v1.486h1.21c.47 0 .746-.299.746-.754m2.231 3.372c0 1.546-1.09 2.402-2.65 2.402H5.834V7.91h3.249c1.573 0 2.64.805 2.64 2.277 0 .672-.298 1.27-.781 1.634.552.326 1.021.947 1.021 1.85Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bt 3s ease-in-out infinite alternate;
}
</style>