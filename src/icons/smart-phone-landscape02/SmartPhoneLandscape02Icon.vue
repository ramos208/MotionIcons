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
      <path d="M2.00018 10.5L2.00018 13.5C2.00018 15.857 2.00018 17.0355 2.73242 17.7678C3.46465 18.5 4.64316 18.5 7.00018 18.5H17.0002C19.3572 18.5 20.5357 18.5 21.268 17.7678C22.0002 17.0355 22.0002 15.857 22.0002 13.5V10.5C22.0002 8.14298 22.0002 6.96447 21.268 6.23223C20.5357 5.5 19.3572 5.5 17.0002 5.5L7.00018 5.5C4.64316 5.5 3.46465 5.5 2.73242 6.23223C2.00018 6.96447 2.00018 8.14298 2.00018 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M1.99994 9.5L1.99994 13.5L2.99994 13L2.99994 10L1.99994 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smart-phone-landscape02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smart-phone-landscape02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smart-phone-landscape02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smart-phone-landscape02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smart-phone-landscape02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smart-phone-landscape02 3s ease-in-out infinite alternate;
}
</style>