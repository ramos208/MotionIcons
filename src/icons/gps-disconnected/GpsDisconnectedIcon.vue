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
      <path d="M21.9999 7.99997L18.9999 4.99997M18.9999 4.99997L15.9999 1.99997M18.9999 4.99997L15.9999 7.99997M18.9999 4.99997L21.9999 1.99997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.99988 10.0294C10.3725 8.65685 12.5979 8.65685 13.9704 10.0294C15.343 11.402 15.343 13.6274 13.9704 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.85277 19.1471C8.04856 22.3429 12.9126 22.8538 16.6417 20.6797C17.5284 20.1627 17.9717 19.9043 17.9988 19.3782C18.0259 18.8522 17.5276 18.4882 16.5308 17.7603C14.6828 16.4107 12.8635 14.7603 11.0515 12.9484C9.23955 11.1364 7.58915 9.31705 6.23957 7.46904C5.51167 6.47231 5.14772 5.97395 4.62166 6.00105C4.0956 6.02815 3.83713 6.47149 3.32019 7.35818C1.14611 11.0873 1.65697 15.9513 4.85277 19.1471Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gps-disconnected
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gps-disconnected (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gps-disconnected {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gps-disconnected {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gps-disconnected 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gps-disconnected 3s ease-in-out infinite alternate;
}
</style>