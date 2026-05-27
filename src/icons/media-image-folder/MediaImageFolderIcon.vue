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
      <path d="M22 12.6V20.4C22 20.7314 21.7314 21 21.4 21H13.6C13.2686 21 13 20.7314 13 20.4V12.6C13 12.2686 13.2686 12 13.6 12H21.4C21.7314 12 22 12.2686 22 12.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 14.51L19.51 14.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 18.2L16.5 17L22 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10V3.6C2 3.26863 2.26863 3 2.6 3H8.77805C8.92127 3 9.05977 3.05124 9.16852 3.14445L12.3315 5.85555C12.4402 5.94876 12.5787 6 12.722 6H21.4C21.7314 6 22 6.26863 22 6.6V9M2 10V18.4C2 18.7314 2.26863 19 2.6 19H10M2 10H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: media-image-folder
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for media-image-folder (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-media-image-folder {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-media-image-folder {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-media-image-folder 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-media-image-folder 3s ease-in-out infinite alternate;
}
</style>