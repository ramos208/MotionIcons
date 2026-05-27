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
      <path d="M4.91872 4.43926C5.46116 3.73152 5.73238 3.37764 6.10315 3.18882C6.47393 3 6.89759 3 7.74491 3H10.1606C11.0277 3 11.4612 3 11.7306 3.29289C12 3.58579 12 4.05719 12 5V9H7.74491C6.89759 9 6.47393 9 6.10315 8.81118C5.73238 8.62236 5.46116 8.26848 4.91872 7.56074L4.70383 7.28037C4.23461 6.66816 4 6.36205 4 6C4 5.63795 4.23461 5.33184 4.70383 4.71963L4.91872 4.43926Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.0813 9.43926C18.5388 8.73152 18.2676 8.37764 17.8968 8.18882C17.5261 8 17.1024 8 16.2551 8H12V14H16.2551C17.1024 14 17.5261 14 17.8968 13.8112C18.2676 13.6224 18.5388 13.2685 19.0813 12.5607L19.2962 12.2804C19.7654 11.6682 20 11.362 20 11C20 10.638 19.7654 10.3318 19.2962 9.71963L19.0813 9.43926Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 21L12 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 21H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: directions01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for directions01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-directions01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-directions01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-directions01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-directions01 3s ease-in-out infinite alternate;
}
</style>