<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M17.5 3.5H18.5C19.4428 3.5 19.9142 3.5 20.2071 3.79289C20.5 4.08579 20.5 4.55719 20.5 5.5V16.5C20.5 18.3856 20.5 19.3284 19.9142 19.9142C19.3284 20.5 18.3856 20.5 16.5 20.5H5.5C4.55719 20.5 4.08579 20.5 3.79289 20.2071C3.5 19.9142 3.5 19.4428 3.5 18.5V17.5C3.5 16.5572 3.5 16.0858 3.79289 15.7929C4.08579 15.5 4.55719 15.5 5.5 15.5H7.5V13.5C7.5 12.5572 7.5 12.0858 7.79289 11.7929C8.08579 11.5 8.55719 11.5 9.5 11.5H11.5V9.5C11.5 8.55719 11.5 8.08579 11.7929 7.79289C12.0858 7.5 12.5572 7.5 13.5 7.5H15.5V5.5C15.5 4.55719 15.5 4.08579 15.7929 3.79289C16.0858 3.5 16.5572 3.5 17.5 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stairs01
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for stairs01 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-stairs01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stairs01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stairs01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-stairs01 2s ease-in-out infinite alternate;
}
</style>