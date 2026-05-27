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
      <path d="M12 0C5.49 0 .257 5.362.257 12v12H12c6.51 0 11.743-5.362 11.743-12S18.51 0 12 0Zm0 3.51c.543 0 1.086.065 1.66.192.383.128.639.383.639.766l-.638 10.085c0 .255-.256.511-.512.511-.766.128-1.533.128-2.171 0-.383 0-.639-.256-.639-.51L9.701 4.467c0-.383.256-.638.638-.766A7.583 7.583 0 0 1 12 3.51Zm.065 12.99c.447 0 .892.031 1.339.095.255 0 .384.256.384.384.127.894.127 1.786 0 2.807 0 .256-.257.384-.384.384a9.427 9.427 0 0 1-2.68 0c-.256 0-.384-.256-.384-.384-.128-.893-.128-1.786 0-2.807 0-.255.256-.384.383-.384a9.478 9.478 0 0 1 1.342-.095z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: downdetector
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for downdetector (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-downdetector {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-downdetector {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-downdetector 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-downdetector 3s ease-in-out infinite alternate;
}
</style>