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
      <path d="M16.5001 22C18.7092 22 20.5001 20.2091 20.5001 18C20.5001 16.9335 20.0827 15.9646 19.4024 15.2475C18.8957 14.7134 18.6424 14.4463 18.5712 14.2679C18.5001 14.0895 18.5001 13.8535 18.5001 13.3815V4C18.5001 2.89543 17.6046 2 16.5001 2C15.3955 2 14.5001 2.89543 14.5001 4V13.3815C14.5001 13.8535 14.5001 14.0895 14.4289 14.2679C14.3577 14.4463 14.1044 14.7134 13.5977 15.2475C12.9174 15.9646 12.5001 16.9335 12.5001 18C12.5001 20.2091 14.2909 22 16.5001 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.3133 15.8303C8.67792 15.5416 7.36329 14.104 7.20333 12.2607C7.01373 10.076 8.51806 8.14861 10.5634 7.95588C10.883 7.92576 11.197 7.9398 11.5 7.99327M10.2201 4L10.323 5.18677M6.04201 7.57572L5.18359 6.81058M4.611 12.505L3.5 12.6097M6.86776 17.0868L6.15499 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: thermometer-warm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for thermometer-warm (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-thermometer-warm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-thermometer-warm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-thermometer-warm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-thermometer-warm 3s ease-in-out infinite alternate;
}
</style>