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
      <path d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.9111 8.43439L15.8552 6.65198C16.5358 5.36682 16.8762 4.72424 16.5862 4.02175C16.2963 3.31926 15.7303 3.16307 14.5984 2.8507C13.7693 2.62192 12.8984 2.5 12 2.5C11.1016 2.5 10.2307 2.62192 9.40163 2.8507C8.26967 3.16307 7.70368 3.31926 7.41376 4.02175C7.12384 4.72424 7.46418 5.36682 8.14485 6.65198L9.08888 8.43439M16.9973 12.6649H19.0632C20.5386 12.6649 21.2763 12.6649 21.73 13.3019C22.1838 13.9388 22.0038 14.5449 21.6438 15.7571C21.1143 17.5399 20.1389 19.1197 18.853 20.3559C17.9893 21.1862 17.5575 21.6013 16.8282 21.4789C16.0989 21.3565 15.7574 20.7117 15.0743 19.4221L13.8658 17.1403M10.1342 17.1403L8.92566 19.4221C8.24263 20.7117 7.90112 21.3565 7.17181 21.4789C6.44249 21.6013 6.01067 21.1862 5.14702 20.3559C3.86105 19.1197 2.88572 17.5399 2.35623 15.7571C1.99622 14.5449 1.81621 13.9388 2.26995 13.3019C2.72369 12.6649 3.46138 12.6649 4.93677 12.6649H7.00267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nuclear-power
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nuclear-power (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nuclear-power {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nuclear-power {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nuclear-power 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nuclear-power 3s ease-in-out infinite alternate;
}
</style>