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
      <path d="M10.8386 19.7631H16.4671C19.3324 19.7631 20.7651 19.7631 21.4622 19.0038C21.6578 18.7907 21.8093 18.544 21.9087 18.2766C22.2627 17.3239 21.567 16.1237 20.1754 13.7234M10.8386 19.7631L13.7564 17.5262M10.8386 19.7631L13.7564 22M18.4896 10.8154L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705M18.4896 10.8154L15.0117 9.50645M18.4896 10.8154L19.0588 7.27638M6.81856 8.57849L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631M6.81856 8.57849L7.36018 12.1215M6.81856 8.57849L3.33053 9.8626" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: recycle02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for recycle02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-recycle02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-recycle02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-recycle02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-recycle02 3s ease-in-out infinite alternate;
}
</style>