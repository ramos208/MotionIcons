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
      <path d="M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5001 19.999V3.99902M16.5001 19.999C15.7998 19.999 14.4916 18.0047 14.0001 17.499M16.5001 19.999C17.2003 19.999 18.5085 18.0047 19.0001 17.499" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sorting-nine-one
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sorting-nine-one (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sorting-nine-one {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sorting-nine-one {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sorting-nine-one 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sorting-nine-one 3s ease-in-out infinite alternate;
}
</style>