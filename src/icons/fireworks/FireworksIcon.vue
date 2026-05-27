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
      <path d="M19 18C17.5 12.5 12 11 12 11C12 11 8 14.5 8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 10.0249C3.33333 9.01472 7.2 7.80245 12 11.0352C13.1667 9.35033 16.8 6.38511 22 8.00281" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 5C14 5.66667 12 7.8 12 11C11.6667 9.33333 10 5.6 6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 14C6.98663 13 9.55185 11 11.9198 11C12.9064 12.1667 13.8069 14 13.3997 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.15 3.1H3.1M3.2 3.1C3.2 3.15523 3.15523 3.2 3.1 3.2C3.04477 3.2 3 3.15523 3 3.1C3 3.04477 3.04477 3 3.1 3C3.15523 3 3.2 3.04477 3.2 3.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.9508 3.1H16.9008M17.0008 3.1C17.0008 3.15523 16.956 3.2 16.9008 3.2C16.8456 3.2 16.8008 3.15523 16.8008 3.1C16.8008 3.04477 16.8456 3 16.9008 3C16.956 3 17.0008 3.04477 17.0008 3.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.5504 12.5014H20.5004M20.6004 12.5014C20.6004 12.5566 20.5556 12.6014 20.5004 12.6014C20.4452 12.6014 20.4004 12.5566 20.4004 12.5014C20.4004 12.4461 20.4452 12.4014 20.5004 12.4014C20.5556 12.4014 20.6004 12.4461 20.6004 12.5014Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.0345 20.9H12.9845M13.0845 20.9C13.0845 20.9552 13.0398 21 12.9845 21C12.9293 21 12.8845 20.9552 12.8845 20.9C12.8845 20.8448 12.9293 20.8 12.9845 20.8C13.0398 20.8 13.0845 20.8448 13.0845 20.9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.15 15.9H4.1M4.2 15.9C4.2 15.9552 4.15523 16 4.1 16C4.04477 16 4 15.9552 4 15.9C4 15.8448 4.04477 15.8 4.1 15.8C4.15523 15.8 4.2 15.8448 4.2 15.9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.9508 11.1H17.9008M18.0008 11.1C18.0008 11.1552 17.956 11.2 17.9008 11.2C17.8456 11.2 17.8008 11.1552 17.8008 11.1C17.8008 11.0448 17.8456 11 17.9008 11C17.956 11 18.0008 11.0448 18.0008 11.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.0504 4.1H11.0004M11.1004 4.1C11.1004 4.15523 11.0556 4.2 11.0004 4.2C10.9452 4.2 10.9004 4.15523 10.9004 4.1C10.9004 4.04477 10.9452 4 11.0004 4C11.0556 4 11.1004 4.04477 11.1004 4.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fireworks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fireworks (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fireworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fireworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fireworks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fireworks 3s ease-in-out infinite alternate;
}
</style>