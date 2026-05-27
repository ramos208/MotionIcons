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
      <path d="M2 8.81966C3.05591 7.87522 4.23126 7.09293 5.4875 6.4875M22 8.81966C19.2499 6.35989 15.6897 5 12 5C10.7883 5 9.5905 5.14667 8.4308 5.4308M5 12.8587C6.22581 11.6571 7.72851 10.8022 9.35595 10.3559M19 12.8587C17.3838 11.2744 15.2862 10.2927 13.056 10.056M8.5 16.4287C9.43464 15.5125 10.6912 14.9994 12 14.9994C13.0878 14.9994 14.1392 15.3543 15 16M12.1256 19.75H12.0006M12.2506 19.75C12.2506 19.8881 12.1387 20 12.0006 20C11.8625 20 11.7506 19.8881 11.7506 19.75C11.7506 19.6119 11.8625 19.5 12.0006 19.5C12.1387 19.5 12.2506 19.6119 12.2506 19.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 4L19 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wifi-off02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wifi-off02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wifi-off02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wifi-off02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wifi-off02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wifi-off02 3s ease-in-out infinite alternate;
}
</style>