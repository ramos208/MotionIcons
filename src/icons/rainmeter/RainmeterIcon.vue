<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12.7 1.088L12 0l-.7 1.088c-.751 1.168-7.342 11.525-7.342 15.366C3.958 20.615 7.565 24 12 24s8.042-3.385 8.042-7.546c0-3.84-6.591-14.197-7.342-15.366zM12 22.335c-3.516 0-6.377-2.638-6.377-5.881C5.623 13.908 9.732 6.756 12 3.1c2.268 3.656 6.377 10.809 6.377 13.355 0 3.242-2.861 5.88-6.377 5.88zm4.957-6.017c0 2.548-2.22 4.615-4.957 4.615-2.737 0-4.957-2.067-4.957-4.615 0-.163.021-.347.058-.549 0 0 1.306-2.616 4.847 0 2.999 2.215 4.95 0 4.95 0 .038.202.059.386.059.549z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rainmeter
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for rainmeter (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rainmeter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rainmeter {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rainmeter 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rainmeter 3s ease-in-out infinite alternate;
}
</style>