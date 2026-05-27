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
      <path d="M13.9841 6.01233C13.9841 3.79746 12.2051 2.00195 10.0106 2.00195C7.81611 2.00195 6.03711 3.79746 6.03711 6.01233" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.37635 21.9925L9.27193 20.8967C8.78437 18.8793 8.11805 18.6134 7.03331 17.1675C6.54359 16.5147 5.5203 15.5898 4.68367 14.3404C4.12621 13.5078 4.87008 11.6153 6.56595 12.1923C6.84825 12.2883 7.08555 12.4807 7.29594 12.692L8.94241 14.3457C8.92894 12.0081 8.95893 7.24935 8.92261 5.78903C8.88628 4.32871 11.4204 3.85879 11.5697 5.85539V10.3468M11.5697 10.3468V11.2124M11.5697 10.3468C12.3984 9.24878 13.9664 9.21013 14.1946 11.0483M14.1946 11.0483C14.2317 11.3476 14.2346 11.6972 14.1946 12.1008M14.1946 11.0483C14.6133 9.7641 16.4526 10.274 16.8186 11.7687M16.8186 11.7687C16.9054 12.123 16.8186 12.533 16.8535 13.0064M16.8186 11.7687C17.0563 11.0483 19.6844 10.9951 19.4345 13.778L19.5 16.3019C19.3995 17.8089 19.1783 18.4403 18.6368 19.1687C18.3562 19.5463 17.9881 19.8788 17.8475 20.3278C17.7297 20.704 17.6555 21.2547 17.7367 22.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap05 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap05 3s ease-in-out infinite alternate;
}
</style>