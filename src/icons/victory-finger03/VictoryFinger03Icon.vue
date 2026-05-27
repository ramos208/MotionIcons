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
      <path d="M6.97809 13.5196L6.38311 10.0699M6.38311 10.0699L5.32331 3.92521C5.17123 2.942 5.70202 2.23777 6.51218 2.03937C7.33198 1.83861 8.18303 2.48368 8.29549 3.18841L9.99009 10.0699L11.6372 3.36463C11.8014 2.37214 12.7453 1.93054 13.5651 2.1313C14.3752 2.3297 14.8096 2.942 14.6576 3.92521L13.4798 10.5572M6.38311 10.0699C5.69802 10.7529 4.5957 11.9809 4.24908 12.756C4.1635 12.9473 4.09591 13.1477 4.04777 13.3516C3.8181 14.3245 4.37723 15.4279 5.95195 17.5026C6.58241 18.2417 7.69179 19.6008 7.7582 19.8228C7.76482 19.8449 8.06999 20.2163 7.99161 21.9979M13.8734 8.34106C14.5178 7.87452 16.2467 7.70574 16.9221 9.47321C16.946 9.60185 16.9842 9.70326 16.9972 9.83092M16.9972 9.83092C17.0559 10.4083 16.9972 10.9603 16.9972 11.0299M16.9972 9.83092C17.3809 9.08115 19.624 10.0007 19.915 12.7239C20.1674 14.0971 19.8096 15.9667 19.5931 16.6261C19.2713 17.6064 18.3813 19.1284 18.1814 19.3561C17.3495 20.4835 17.4354 21.4492 17.4354 21.9829" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: victory-finger03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for victory-finger03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-victory-finger03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-victory-finger03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-victory-finger03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-victory-finger03 3s ease-in-out infinite alternate;
}
</style>