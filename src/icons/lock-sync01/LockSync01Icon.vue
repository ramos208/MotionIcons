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
      <path d="M19.5433 10.5L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 1.99999 6.47715 1.99999 12C1.99999 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2153 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.3371 10.88C9.25713 10.88 8.71713 11.66 8.59713 12.14C8.47713 12.62 8.47713 14.36 8.54913 15.08C8.78913 15.98 9.38913 16.352 9.97713 16.472C10.5171 16.52 12.7971 16.502 13.4571 16.502C14.4171 16.52 15.1371 16.16 15.4371 15.08C15.4971 14.72 15.5571 12.74 15.4071 12.14C15.0891 11.18 14.2971 10.88 13.6971 10.88H10.3371Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.25 10.4585C10.25 10.3985 10.2582 10.0531 10.2596 9.61854C10.2609 9.22145 10.226 8.83854 10.4156 8.48814C11.126 7.07454 13.166 7.21854 13.67 8.65854C13.7573 8.89562 13.7626 9.27146 13.76 9.61854C13.7567 10.062 13.766 10.4585 13.766 10.4585" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lock-sync01
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for lock-sync01 (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lock-sync01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lock-sync01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lock-sync01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-lock-sync01 4s linear infinite alternate;
}
</style>