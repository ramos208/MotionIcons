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
      <path d="M20.1765 12.5113C19.8261 9.50898 19.3142 7.25784 18.8394 5.65851C18.4501 4.34711 18.2554 3.69141 17.4572 3.0957C16.659 2.5 15.8431 2.5 14.2113 2.5H8.78876C7.15697 2.5 6.34107 2.5 5.54283 3.0957C4.74459 3.69141 4.54994 4.34711 4.16063 5.65851C3.68586 7.25784 3.1739 9.50898 2.82352 12.5113C2.41058 16.0497 2.20411 17.8189 3.39731 19.1594C4.59052 20.5 6.52422 20.5 10.3916 20.5H11.6084" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 6.5C8.5 8.15685 9.84315 9.5 11.5 9.5C13.1569 9.5 14.5 8.15685 14.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 19.5C14.5 19.5 15.5 19.5 16.5 21.5C16.5 21.5 18.6765 16.5 21.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shopping-bag-check
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shopping-bag-check (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shopping-bag-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shopping-bag-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shopping-bag-check 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shopping-bag-check 3s ease-in-out infinite alternate;
}
</style>