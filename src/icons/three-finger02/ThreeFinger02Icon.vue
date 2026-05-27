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
      <path d="M7.75971 13.4795L7.74145 5.02886C7.73965 4.1996 8.41205 3.52639 9.2421 3.52639C10.0709 3.52639 10.7428 4.19762 10.7428 5.02563M10.7428 5.02563V10.0056M10.7428 5.02563L10.7428 3.49728C10.7428 2.66928 11.4146 1.99805 12.2434 1.99805C13.0735 1.99805 13.7459 2.67125 13.7441 3.50051L13.7441 11.0103M16.7454 11.9977V10.1448M16.7454 10.1448V5.48285C16.7472 4.65359 16.0748 3.98039 15.2448 3.98039C14.416 3.98039 13.7441 4.65162 13.7441 5.47962M16.7454 10.1448C17.552 10.024 19.5243 10.1448 19.7475 12.0023V15.684C19.7475 17.0435 19.5178 18.1434 18.1285 19.7409C17.6131 20.4161 17.6846 21.0947 17.6846 22.002M7.75002 8.9992C7.11294 9.55515 5.50173 11.0778 4.59852 12.4555C3.34405 14.369 5.82174 16.8627 6.84695 18.2521C8.36321 20.0648 8.26197 20.0142 8.26197 21.9951" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: three-finger02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for three-finger02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-three-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-three-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-three-finger02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-three-finger02 3s ease-in-out infinite alternate;
}
</style>