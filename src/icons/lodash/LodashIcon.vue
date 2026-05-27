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
      <path d="m0 20.253h24v2.542h-24zm18.061-15.041.223.031c1.933-.071 3.885 1.006 4.882 2.674.844 1.566.976 3.458.712 5.187-.204 1.657-1.149 3.234-2.644 4.027-2.177 1.139-5.085 1.017-7.017-.59-1.994-1.942-2.461-5.136-1.444-7.678.711-2.207 3-3.661 5.288-3.63zm.234 1.8h-.183c-1.424-.03-2.777.915-3.285 2.237-.732 1.831-.732 4.17.691 5.695 1.17 1.434 3.458 1.597 4.882.438 1.525-1.312 1.83-3.59 1.322-5.451-.275-1.648-1.78-2.929-3.458-2.929zm-18.295-5.807h2.237v14.847h8.848v1.831h-11.085z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lodash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lodash (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lodash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lodash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lodash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lodash 3s ease-in-out infinite alternate;
}
</style>