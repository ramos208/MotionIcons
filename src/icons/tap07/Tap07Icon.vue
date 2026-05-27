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
      <path d="M13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.3182 8.92095V6.36364C10.3182 5.61052 9.70766 5 8.95455 5C8.20143 5 7.59091 5.61052 7.59091 6.36364V14.2556L6.11791 12.8013C5.47161 12.1632 4.40702 12.2214 3.83605 12.9261C3.39916 13.4653 3.38709 14.228 3.80671 14.7804L6.53761 18.3753C7.15737 19.1912 7.46726 19.5991 7.84017 19.9162C8.4091 20.3999 9.09086 20.7364 9.82417 20.8956C10.3048 20.9999 10.8213 20.9999 11.8542 20.9999C13.8238 20.9999 14.8086 20.9999 15.5926 20.7028C16.7915 20.2484 17.7388 19.3131 18.199 18.1294C18.5 17.3554 18.5 16.3831 18.5 14.4385V12.2263C18.5 11.3516 17.8574 10.605 16.9807 10.4612L16.6694 10.4101C16.2 10.3331 15.7727 10.6894 15.7727 11.1578M10.3182 8.92095L10.8434 8.6625C11.0958 8.53826 11.3782 8.45807 11.6527 8.52283C12.4516 8.71133 13.0455 9.41894 13.0455 10.2631M10.3182 8.92095V11.1578M13.0455 10.2631V11.1578M13.0455 10.2631C13.0455 9.76891 13.4525 9.36832 13.9545 9.36832C14.9587 9.36832 15.7727 10.1695 15.7727 11.1578M15.7727 11.1578V12.0525" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap07 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap07 3s ease-in-out infinite alternate;
}
</style>