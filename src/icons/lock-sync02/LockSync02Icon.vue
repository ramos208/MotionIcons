<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M20 11H22C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.25 10.9824V9.1905C14.25 7.98072 13.2426 7 12 7C10.7574 7 9.75 7.98072 9.75 9.1905V10.9824M12 17C10.067 17 8.5 15.4744 8.5 13.5926C8.5 11.7107 10.067 10.1851 12 10.1851C13.933 10.1851 15.5 11.7107 15.5 13.5926C15.5 15.4744 13.933 17 12 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lock-sync02
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for lock-sync02 (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-lock-sync02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lock-sync02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lock-sync02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-lock-sync02 4s linear infinite alternate;
}
</style>