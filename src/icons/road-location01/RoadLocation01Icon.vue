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
      <path d="M19 16L17 16M13 16L11 16M7 16L5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 5.85058C16 8.525 13.0435 10.466 12.214 10.9424C12.0802 11.0192 11.9198 11.0192 11.786 10.9424C10.9565 10.466 8 8.525 8 5.85058C8 3.8 9.79086 2 12 2C14.2091 2 16 3.8 16 5.85058Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 10C19.5534 10.0469 20.48 10.2204 21.1213 10.8626C22 11.7426 22 13.1588 22 15.9913C22 18.8238 22 20.2401 21.1213 21.1201C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1201C2 20.2401 2 18.8238 2 15.9913C2 13.1588 2 11.7426 2.87868 10.8626C3.51998 10.2204 4.44655 10.0469 6 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.1348 6H12.0098M12.2598 6C12.2598 6.13807 12.1478 6.25 12.0098 6.25C11.8717 6.25 11.7598 6.13807 11.7598 6C11.7598 5.86193 11.8717 5.75 12.0098 5.75C12.1478 5.75 12.2598 5.86193 12.2598 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: road-location01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for road-location01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-road-location01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-road-location01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-road-location01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-road-location01 3s ease-in-out infinite alternate;
}
</style>