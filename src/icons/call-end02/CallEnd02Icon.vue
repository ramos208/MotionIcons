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
      <path d="M17.0539 6.02918V8.79278C17.0539 9.35653 17.4143 9.87054 17.9747 10.1385C18.413 10.3481 18.9322 10.6067 19.3546 10.847C19.7452 11.0692 20.293 11.0557 20.6214 10.765L21.5133 9.97573C22.17 9.3945 22.1749 8.44418 21.4501 7.93021C15.9402 4.02326 8.05983 4.02326 2.54993 7.93021C1.82509 8.44418 1.82997 9.3945 2.48673 9.97573L3.3786 10.765C3.70697 11.0557 4.24369 11.0574 4.62554 10.8235C5.0468 10.5655 5.53006 10.3258 5.94613 10.1356C6.54384 9.86234 6.94607 9.3266 6.94607 8.73122V6.02918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 15.5C9.18814 16.208 11.0197 19 12 19C12.9803 19 14.8119 16.208 15.5 15.5M12 18.5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: call-end02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for call-end02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-call-end02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-call-end02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-call-end02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-call-end02 3s ease-in-out infinite alternate;
}
</style>