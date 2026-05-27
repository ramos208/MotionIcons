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
      <path d="M18 10.082C19.5534 10.1289 20.48 10.3024 21.1213 10.9446C22 11.8246 22 13.2408 22 16.0734C22 18.9059 22 20.3221 21.1213 21.2021C20.2426 22.082 18.8284 22.082 16 22.082H8C5.17157 22.082 3.75736 22.082 2.87868 21.2021C2 20.3221 2 18.9059 2 16.0734C2 13.2408 2 11.8246 2.87868 10.9446C3.51998 10.3024 4.44655 10.1289 6 10.082" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 16.082L17 16.082M13 16.082L11 16.082M7 16.082L5 16.082" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 2.08203C9.92893 2.08203 8.25 3.71007 8.25 5.71835C8.25 6.86669 8.71875 7.75957 9.65625 8.55712C10.3171 9.11928 11.5194 10.3252 12 11.082C12.505 10.3402 13.6829 9.11928 14.3438 8.55712C15.2812 7.75957 15.75 6.86669 15.75 5.71835C15.75 3.71007 14.0711 2.08203 12 2.08203Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.1348 5.58203H12.0098M12.2598 5.58203C12.2598 5.7201 12.1478 5.83203 12.0098 5.83203C11.8717 5.83203 11.7598 5.7201 11.7598 5.58203C11.7598 5.44396 11.8717 5.33203 12.0098 5.33203C12.1478 5.33203 12.2598 5.44396 12.2598 5.58203Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: road-location02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for road-location02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-road-location02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-road-location02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-road-location02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-road-location02 3s ease-in-out infinite alternate;
}
</style>