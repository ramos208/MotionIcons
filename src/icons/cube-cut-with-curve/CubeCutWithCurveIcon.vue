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
      <path d="M3.52844 7.29346L9 10.3332" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L20 2M12 12L12 10C12 6.45478 14.3061 3.44817 17.5 2.39838" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12L20 12M12 22L12 20C12 16.4548 14.3061 13.4482 17.5 12.3984" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22L3.30861 17.1715C3.11813 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L15 3.66667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11.9999L3.52842 7.29346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 21L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 13.5L15 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cube-cut-with-curve
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cube-cut-with-curve (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cube-cut-with-curve {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cube-cut-with-curve {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cube-cut-with-curve 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cube-cut-with-curve 3s ease-in-out infinite alternate;
}
</style>