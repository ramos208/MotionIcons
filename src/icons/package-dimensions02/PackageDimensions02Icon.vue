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
      <path d="M19.4483 8.04705L14.7814 6.22588C14.3956 6.07529 14.2026 6 14 6C13.7974 6 13.6045 6.07529 13.2186 6.22588L8.55166 8.04705C7.51722 8.45073 7 8.65256 7 9C7 9.34744 7.51722 9.54927 8.55166 9.95295L13.2186 11.7741C13.6045 11.9247 13.7974 12 14 12C14.2026 12 14.3956 11.9247 14.7814 11.7741L19.4483 9.95295C20.4828 9.54927 21 9.34744 21 9C21 8.65256 20.4828 8.45073 19.4483 8.04705Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 22C14.2026 22 14.3956 21.9247 14.7814 21.7741L19.4483 19.9529C20.4828 19.5493 21 19.3474 21 19V9M14 22C13.7974 22 13.6045 21.9247 13.2186 21.7741L8.55166 19.9529C7.51722 19.5493 7 19.3474 7 19V9M14 22V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 7.5L10.5 10.5V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 3H21M7 3V2M7 3V4M21 3V2M21 3V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 7L4 21M4 7L5 7M4 7L3 7M4 21H5M4 21H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: package-dimensions02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for package-dimensions02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-package-dimensions02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-package-dimensions02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-package-dimensions02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-package-dimensions02 3s ease-in-out infinite alternate;
}
</style>