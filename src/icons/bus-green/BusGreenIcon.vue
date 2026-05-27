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
      <path d="M7 16.01L7.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12H3V19C3 19.5523 3.44772 20 4 20H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23C17 23 17.9 19.8824 20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.8022 21.4245L19.6677 21.4372C17.9758 21.5961 16.469 20.3541 16.3021 18.663C16.1353 16.9719 17.3715 15.4721 19.0634 15.3131L22.049 15.0326C22.2406 15.0146 22.4111 15.1552 22.43 15.3466L22.6847 17.9276C22.8589 19.6929 21.5683 21.2586 19.8022 21.4245Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 8V6C21 3.79086 19.2091 2 17 2H7C4.79086 2 3 3.79086 3 6V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 8L17 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 20V21.9C4.5 22.2314 4.76863 22.5 5.1 22.5H7.9C8.23137 22.5 8.5 22.2314 8.5 21.9V20" stroke="currentColor" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bus-green
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bus-green (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bus-green {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bus-green {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bus-green 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bus-green 3s ease-in-out infinite alternate;
}
</style>