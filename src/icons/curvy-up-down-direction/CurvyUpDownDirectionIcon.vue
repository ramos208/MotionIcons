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
      <path d="M13.0135 19.9962C13.0135 19.9962 11.5441 21.9976 11.0172 21.9985C10.4902 21.9994 9.01411 20.003 9.01411 20.003M14.9863 3.99552C14.9863 3.99552 13.5101 2.00008 12.9832 2.00098C12.4562 2.00188 10.9869 4.00237 10.9869 4.00237M12.851 2.22593C13.1433 3.63634 13.2603 6.2807 10.8092 7.59471C9.94673 8.13922 8.50078 8.03987 6.85542 8.04268C6.18478 8.07762 4.96565 8.65084 4.99871 10.0822C5.03176 11.5135 6.20852 11.9815 6.79277 12.0366L16.9018 12.0193C17.7533 12.0033 18.9994 12.4946 19.002 14.0102C19.0045 15.4898 17.6936 16.0713 16.7099 15.9453C14.0457 15.6042 11.2552 16.4168 11.017 19.9156L11.0206 21.9985" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: curvy-up-down-direction
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for curvy-up-down-direction (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-curvy-up-down-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-curvy-up-down-direction {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-curvy-up-down-direction 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-curvy-up-down-direction 3s ease-in-out infinite alternate;
}
</style>