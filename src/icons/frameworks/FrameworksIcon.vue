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
      <path d="M13 2H11C10.4477 2 10 2.44772 10 3V5C10 5.55228 10.4477 6 11 6H13C13.5523 6 14 5.55228 14 5V3C14 2.44772 13.5523 2 13 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 18H11C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22H13C13.5523 22 14 21.5523 14 21V19C14 18.4477 13.5523 18 13 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 4H16C17.4142 4 18.1213 4 18.5607 4.43934C19 4.87868 19 5.58579 19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 4H8C6.58579 4 5.87868 4 5.43934 4.43934C5 4.87868 5 5.58579 5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 20H8C6.58579 20 5.87868 20 5.43934 19.5607C5 19.1213 5 18.4142 5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 20H16C17.4142 20 18.1213 20 18.5607 19.5607C19 19.1213 19 18.4142 19 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 12H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 13V11C21 10.4477 20.5523 10 20 10L18 10C17.4477 10 17 10.4477 17 11L17 13C17 13.5523 17.4477 14 18 14H20C20.5523 14 21 13.5523 21 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 13V11C7 10.4477 6.55228 10 6 10L4 10C3.44772 10 3 10.4477 3 11L3 13C3 13.5523 3.44772 14 4 14H6C6.55228 14 7 13.5523 7 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: frameworks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for frameworks (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-frameworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-frameworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-frameworks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-frameworks 3s ease-in-out infinite alternate;
}
</style>