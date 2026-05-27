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
      <path d="M2.98052 13.2888C2.25918 14.591 2.05755 16.2028 2.00119 17.0021C1.98176 17.2775 2.20345 17.5 2.47992 17.5H3.98173M2.98052 13.2888C2.98052 10.144 3.89594 6.34904 5.72678 4.71122C5.88815 4.56686 6.10124 4.5 6.31787 4.5H11.1118C11.6911 4.5 12.2694 4.6171 12.7553 4.93222C13.9539 5.70953 15.7652 7.27971 17.3038 9.68934C17.4311 9.88859 17.6211 10.0398 17.8435 10.1204C18.7292 10.4415 19.7153 10.887 20.3463 11.1839C20.7723 11.3844 21.1116 11.7341 21.273 12.176C21.7174 13.393 21.9682 14.7508 22 16.9994C22.0038 17.2755 21.7793 17.5 21.5028 17.5H20.001M2.98052 13.2888C3.34135 12.6373 3.83222 12.0634 4.5 11.7073M15.9962 17.5H7.98654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 17.5C8 18.6046 7.10457 19.5 6 19.5C4.89543 19.5 4 18.6046 4 17.5C4 16.3954 4.89543 15.5 6 15.5C7.10457 15.5 8 16.3954 8 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 17.5C20 18.6046 19.1046 19.5 18 19.5C16.8954 19.5 16 18.6046 16 17.5C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 10C14.5 9 11 8.5 7 9C7 7 8 5 8.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 11H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: car04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for car04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-car04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-car04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-car04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-car04 3s ease-in-out infinite alternate;
}
</style>