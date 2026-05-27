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
      <path d="M239.18,91.05A15.75,15.75,0,0,0,224,80h-61L143.23,19.26a15.93,15.93,0,0,0-30.45-.05L93.06,80H32a16,16,0,0,0-9.37,29l49.46,35.58L53.15,203A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0L128,184.75l50.23,36.13A16,16,0,0,0,202.85,203l-19-58.46,49.49-35.61A15.74,15.74,0,0,0,239.18,91.05ZM128,24.15,146.12,80H109.88ZM32,96H87.87L77.3,128.56Zm36.34,112h0l17.39-53.59,28.54,20.54Zm22.57-69.57L104.69,96h46.62l13.75,42.38L128,165Zm96.69,69.57,0,0-45.9-33,28.54-20.54Zm-8.93-79.38L168.13,96H224Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pentagram
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pentagram (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pentagram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pentagram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pentagram 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pentagram 3s ease-in-out infinite alternate;
}
</style>