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
      <path d="M14.4998 13.501C14.4998 14.8817 13.3805 16.001 11.9998 16.001C10.619 16.001 9.49976 14.8817 9.49976 13.501C9.49976 12.1203 10.619 11.001 11.9998 11.001C13.3805 11.001 14.4998 12.1203 14.4998 13.501Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 6.5498C19.1831 6.66255 20.3941 6.94811 21.1329 7.17709C21.6756 7.34528 22 7.85966 22 8.42782V18.1831C22 19.2982 20.7719 20.1372 19.6762 19.9303C18.7361 19.7528 17.5107 19.6101 16 19.6101C11.2491 19.6101 10.1096 21.4158 3.1448 19.88C2.47265 19.7318 2 19.1273 2 18.439V8.42193C2 7.44607 2.92079 6.73443 3.87798 6.92437C4.86572 7.12037 5.72897 7.24475 6.5 7.3151" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 10.501C3.95133 10.501 5.70483 8.90605 5.92901 7.25514M18.5005 7.00098C18.5005 9.04062 20.2655 10.97 22 10.97M22 16.501C20.1009 16.501 18.2601 17.8112 18.102 19.5993M6.00049 19.9971C6.00049 17.7879 4.20963 15.9971 2.00049 15.9971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 7.50098V3.50098M15 7.50098V5.50098M9 7.50098V5.50098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: money-receive-flow02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for money-receive-flow02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-money-receive-flow02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-money-receive-flow02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-money-receive-flow02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-money-receive-flow02 3s ease-in-out infinite alternate;
}
</style>