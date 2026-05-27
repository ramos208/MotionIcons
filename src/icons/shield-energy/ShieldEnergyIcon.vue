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
      <path d="M8.12901 11.1313L12.128 6.1907C12.4408 5.80431 13.027 6.0448 13.027 6.55951V10.3836C13.027 10.6919 13.2569 10.9419 13.5405 10.9419H15.4855C15.9274 10.9419 16.1629 11.5083 15.871 11.8689L11.872 16.8095C11.5592 17.1959 10.973 16.9554 10.973 16.4407V12.6167C10.973 12.3083 10.7431 12.0584 10.4595 12.0584H8.51449C8.07264 12.0584 7.83711 11.4919 8.12901 11.1313Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 11.1835V8.28041C21 6.64041 21 5.82041 20.5959 5.28541C20.1918 4.75042 19.2781 4.49068 17.4507 3.97122C16.2022 3.61632 15.1016 3.18875 14.2223 2.79841C13.0234 2.26622 12.424 2.00012 12 2.00012C11.576 2.00012 10.9766 2.26622 9.77771 2.79841C8.89839 3.18875 7.79784 3.61632 6.54933 3.97122C4.72193 4.49068 3.80822 4.75042 3.40411 5.28541C3 5.82041 3 6.64041 3 8.28041V11.1835C3 16.8086 8.06277 20.1836 10.594 21.5195C11.2011 21.8399 11.5046 22.0001 12 22.0001C12.4954 22.0001 12.7989 21.8399 13.406 21.5195C15.9372 20.1836 21 16.8086 21 11.1835Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shield-energy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shield-energy (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shield-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shield-energy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shield-energy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shield-energy 3s ease-in-out infinite alternate;
}
</style>