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
      <path d="M6 20H9M12 20H9M9 20V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 20V12C17 12 19.5 11 19.5 9C19.5 7.24264 19.5 4.5 19.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8.5V4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.49999 11C5.49991 13.1281 8.99999 15 8.99999 15C8.99999 15 12.5001 13.1281 13.5 11C14.5795 8.70257 13.5 4.5 13.5 4.5L4.49999 4.5C4.49999 4.5 3.42047 8.70257 4.49999 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cutlery
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cutlery (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cutlery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cutlery {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cutlery 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cutlery 3s ease-in-out infinite alternate;
}
</style>