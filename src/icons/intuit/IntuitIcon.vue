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
      <path d="M12.32 12.38c0 1.174.974 2.033 2.211 2.033 1.237 0 2.212-.859 2.212-2.033v-2.7h-1.198v2.56c0 .633-.44 1.06-1.017 1.06s-1.017-.424-1.017-1.06V9.68h-1.198l.008 2.699zm7.624-1.619h1.429v3.563h1.198V10.76H24V9.68h-4.056v1.082zM19.17 9.68h-1.198v4.645h1.198V9.679zM7.482 10.761h1.43v3.563h1.197V10.76h1.428V9.68H7.482v1.082zM1.198 9.68H0v4.645h1.198V9.679zm5.653 1.94c0-1.174-.974-2.032-2.212-2.032-1.238 0-2.212.858-2.212 2.032v2.705h1.198v-2.56c0-.633.44-1.06 1.017-1.06s1.018.425 1.018 1.06v2.56h1.197L6.85 11.62h.001z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: intuit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for intuit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-intuit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-intuit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-intuit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-intuit 3s ease-in-out infinite alternate;
}
</style>