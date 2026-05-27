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
      <path d="M14 10.5C14 12.1569 12.6569 13.5 11 13.5C9.34315 13.5 8 12.1569 8 10.5C8 8.84315 9.34315 7.5 11 7.5C12.6569 7.5 14 8.84315 14 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 20.5V19.3284C14 18.798 14.2107 18.2893 14.5858 17.9142L18.6464 13.8536C18.8728 13.6272 19.1799 13.5 19.5 13.5C19.8201 13.5 20.1272 13.6272 20.3536 13.8536L20.6464 14.1464C20.8728 14.3728 21 14.6799 21 15C21 15.3201 20.8728 15.6272 20.6464 15.8536L16.5858 19.9142C16.2107 20.2893 15.702 20.5 15.1716 20.5H14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 10.5352C18.9998 6.09743 15.4182 2.5 11 2.5C6.58184 2.5 3.00019 6.09743 3 10.5352C3 13.0728 4 15.0462 6 16.8086C7.07535 17.7562 8.82325 19.5313 10.0469 21.0625C10.2798 21.354 10.6397 21.5 11 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: map-pin-pen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for map-pin-pen (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-map-pin-pen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-map-pin-pen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-map-pin-pen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-map-pin-pen 3s ease-in-out infinite alternate;
}
</style>