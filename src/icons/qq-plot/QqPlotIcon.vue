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
      <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 19.5001L20 4.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.375 17.25H13.25M13.5 17.25C13.5 17.3881 13.3881 17.5 13.25 17.5C13.1119 17.5 13 17.3881 13 17.25C13 17.1119 13.1119 17 13.25 17C13.3881 17 13.5 17.1119 13.5 17.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.375 11.25H19.25M19.5 11.25C19.5 11.3881 19.3881 11.5 19.25 11.5C19.1119 11.5 19 11.3881 19 11.25C19 11.1119 19.1119 11 19.25 11C19.3881 11 19.5 11.1119 19.5 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.375 4.25H14.25M14.5 4.25C14.5 4.38807 14.3881 4.5 14.25 4.5C14.1119 4.5 14 4.38807 14 4.25C14 4.11193 14.1119 4 14.25 4C14.3881 4 14.5 4.11193 14.5 4.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.375 6.25H9.25M9.5 6.25C9.5 6.38807 9.38807 6.5 9.25 6.5C9.11193 6.5 9 6.38807 9 6.25C9 6.11193 9.11193 6 9.25 6C9.38807 6 9.5 6.11193 9.5 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.375 11.25H7.25M7.5 11.25C7.5 11.3881 7.38807 11.5 7.25 11.5C7.11193 11.5 7 11.3881 7 11.25C7 11.1119 7.11193 11 7.25 11C7.38807 11 7.5 11.1119 7.5 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qq-plot
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qq-plot (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qq-plot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qq-plot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qq-plot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qq-plot 3s ease-in-out infinite alternate;
}
</style>