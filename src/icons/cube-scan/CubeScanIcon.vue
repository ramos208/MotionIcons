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
      <path d="M6 3H3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 3H21V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 21H3V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 21H21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5145 17.6913L16.5145 15.2913C16.8157 15.1106 17 14.7851 17 14.4338V10.5662C17 10.2149 16.8157 9.88942 16.5145 9.7087L12.5145 7.3087C12.1978 7.11869 11.8022 7.11869 11.4855 7.3087L7.4855 9.7087C7.1843 9.88942 7 10.2149 7 10.5662V14.4338C7 14.7851 7.1843 15.1106 7.4855 15.2913L11.4855 17.6913C11.8022 17.8813 12.1978 17.8813 12.5145 17.6913Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 10.5L12 12.9995M12 12.9995C12 12.9995 15.7637 10.9492 16.5 10.5M12 12.9995V17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cube-scan
// Category: search
// Physics Presets: Dynamic kinetic adaptation for cube-scan (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cube-scan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cube-scan {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cube-scan 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cube-scan 3s ease-in-out infinite alternate;
}
</style>