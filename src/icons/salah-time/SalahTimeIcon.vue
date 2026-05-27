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
      <path d="M15.0092 5.00159C13.7435 3.18742 11.3856 2.00044 9.00543 2.00044C5.13698 2.00044 2.00098 5.13565 2.00098 9.00311C2.00098 12.7024 4.87016 15.7493 8.50511 16.0058" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.00486 7.00244V9.5034L7.50391 10.5038" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.6148 15.5486C11.2537 13.8925 11.0215 12.2295 12.969 10.2102C15.0149 8.38506 16.1931 7.52188 16.507 7.00244C16.8209 7.52188 18.0182 8.38506 20.0641 10.2102C21.9183 11.8643 21.8017 13.8925 20.4405 15.5486M12.6148 15.5486H12.0923M12.6148 15.5486H20.4405M20.4405 15.5486H20.9009M11.0215 15.5486H12.0923M12.0923 15.5486V21.0934C12.1323 21.7611 12.0923 22.0727 13.3035 21.9852H16.4881M20.9009 15.5486H22.0001M20.9009 15.5486V21.1949C21.0177 22.1018 20.2956 21.9427 19.8338 21.9852H16.4881M16.4881 21.9852L16.5235 19.8507" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: salah-time
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for salah-time (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-salah-time {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-salah-time {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-salah-time 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-salah-time 3s ease-in-out infinite alternate;
}
</style>