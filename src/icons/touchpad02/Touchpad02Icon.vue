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
      <path d="M11.1957 14.1439L13 15.7621V7.49993C13 6.6715 13.6716 5.99993 14.5 5.99993C15.3284 5.99993 16 6.6715 16 7.49993V11.982L17.7888 12.2968C19.2636 12.5405 20.001 12.6623 20.5205 13.0049C21.3784 13.571 22 14.421 22 15.6619C22 16.5263 21.806 17.1062 21.3344 18.6642C21.0352 19.6527 20.8855 20.147 20.6416 20.5383C20.2399 21.1825 19.6473 21.6529 18.9653 21.8688C18.551 22 18.0779 22 17.1316 22H16.3295C15.0714 22 14.4424 22 13.8824 21.7458C13.7819 21.7002 13.6838 21.6488 13.5883 21.5917C13.056 21.2734 12.6594 20.7357 11.866 19.6605L9.29778 16.1796C8.90312 15.6447 8.90049 14.8792 9.29146 14.341C9.76138 13.6941 10.6245 13.6048 11.1957 14.1439Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 9.99989C22 6.22866 22 4.34304 20.8284 3.17147C19.6569 1.99989 17.7712 1.99989 14 1.99989H10C6.22876 1.99989 4.34315 1.99989 3.17157 3.17147C2 4.34304 2 6.22866 2 9.99989V11.9999C2 13.8637 2 14.7955 2.30448 15.5306C2.71046 16.5107 3.48915 17.2894 4.46927 17.6954C5.05932 17.9398 5.77617 17.988 7 17.9976" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touchpad02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touchpad02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touchpad02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touchpad02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touchpad02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touchpad02 3s ease-in-out infinite alternate;
}
</style>