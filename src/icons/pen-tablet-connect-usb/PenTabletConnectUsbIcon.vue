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
      <path d="M22 7V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12H6" stroke="currentColor" stroke-width="1.5"/><path d="M6 3V21" stroke="currentColor" stroke-width="1.5"/><path d="M19.25 12H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.7 12L17.875 15H16.225" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.6 12L16.5 9H14.575" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12C22 11.2469 21.3844 10.6364 20.625 10.6364C19.8656 10.6364 19.25 11.2469 19.25 12C19.25 12.7531 19.8656 13.3636 20.625 13.3636C21.3844 13.3636 22 12.7531 22 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pen-tablet-connect-usb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pen-tablet-connect-usb (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pen-tablet-connect-usb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pen-tablet-connect-usb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pen-tablet-connect-usb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pen-tablet-connect-usb 3s ease-in-out infinite alternate;
}
</style>