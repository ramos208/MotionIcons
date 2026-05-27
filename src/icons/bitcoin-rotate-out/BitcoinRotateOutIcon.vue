<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8H21.4C21.7314 8 22 7.73137 22 7.4V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12C9.00007 12.8416 9 15.107 9 16.3941C9 16.7255 9.26863 16.9943 9.59998 16.9962C12.5662 17.0136 15 17.072 15 14.5C15 11.7564 12 12 9 12ZM9 12L9.00003 7.60592C9.00003 7.27453 9.26867 7.00571 9.60005 7.00377C12.5662 6.98641 15 6.92799 15 9.5C15 12.2436 12 12 9 12Z" stroke="currentColor"/><path d="M12 7L12 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18.5L12 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitcoin-rotate-out
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for bitcoin-rotate-out (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bitcoin-rotate-out {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bitcoin-rotate-out {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitcoin-rotate-out 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-bitcoin-rotate-out 4s linear infinite alternate;
}
</style>