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
      <path d="M80,48a8,8,0,0,1-8,8H40V72a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H72A8,8,0,0,1,80,48ZM32,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,32,152Zm40,48H40V184a8,8,0,0,0-16,0v16a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16Zm72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm80-24a8,8,0,0,0-8,8v16H184a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V184A8,8,0,0,0,224,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Zm-8-64H184a8,8,0,0,0,0,16h32V72a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Zm-72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rectangle-dashed
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rectangle-dashed (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rectangle-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rectangle-dashed {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rectangle-dashed 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rectangle-dashed 3s ease-in-out infinite alternate;
}
</style>