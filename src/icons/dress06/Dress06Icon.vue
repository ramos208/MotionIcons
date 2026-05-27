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
      <path d="M5.17736 9.03229C8.90312 12.6692 3.12493 17.3689 5.6574 20.5631C7.05911 22.3311 16.7295 22.6216 18.3615 20.5631C20.8927 17.3706 15.1293 12.6763 18.8416 9.03229" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.35531 12.9999C4.08976 12.7909 2.24317 11.3281 2.01008 9.23847C1.97692 8.94124 2.02708 8.64267 2.13808 8.36425C2.85289 6.57126 4.85232 3.53048 7.91642 2.04745C8.12532 1.94634 8.37469 2.01195 8.51635 2.19356C9.27591 3.16733 10.5845 4.68453 12 4.68453C13.4155 4.68453 14.7241 3.16733 15.4836 2.19356C15.6253 2.01195 15.8747 1.94634 16.0836 2.04745C19.1477 3.53048 21.1471 6.57126 21.8619 8.36425C21.9729 8.64267 22.0231 8.94124 21.9899 9.23847C21.7568 11.3281 19.9297 12.7881 17.6641 12.9971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dress06
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dress06 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dress06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dress06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dress06 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dress06 3s ease-in-out infinite alternate;
}
</style>