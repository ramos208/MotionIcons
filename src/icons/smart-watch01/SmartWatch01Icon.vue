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
      <path d="M8 7.5C8 7.5 8.89734 5.92822 9.06196 4.01957C9.13851 3.13198 9.17678 2.68819 9.42636 2.43221C9.67594 2.17623 9.97701 2.14256 10.5792 2.07523C10.9774 2.03069 11.451 2 12 2C12.549 2 13.0226 2.03069 13.4208 2.07523C14.023 2.14256 14.3241 2.17623 14.5736 2.43221C14.8232 2.68819 14.8615 3.13198 14.938 4.01957C15.1027 5.92822 16 7.5 16 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 16.5C16 16.5 15.1027 18.0718 14.938 19.9804C14.8615 20.868 14.8232 21.3118 14.5736 21.5678C14.3241 21.8238 14.023 21.8574 13.4208 21.9248C13.0226 21.9693 12.549 22 12 22C11.451 22 10.9774 21.9693 10.5792 21.9248C9.97701 21.8574 9.67594 21.8238 9.42636 21.5678C9.17678 21.3118 9.13851 20.868 9.06196 19.9804C8.89734 18.0718 8 16.5 8 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smart-watch01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smart-watch01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smart-watch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smart-watch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smart-watch01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smart-watch01 3s ease-in-out infinite alternate;
}
</style>