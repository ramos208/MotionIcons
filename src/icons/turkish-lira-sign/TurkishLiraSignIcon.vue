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
      <path d="M160 32c17.7 0 32 14.3 32 32l0 43.6 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 46.1 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 162.5 72 0c53 0 96-43 96-96 0-17.7 14.3-32 32-32s32 14.3 32 32c0 88.4-71.6 160-160 160l-104 0c-17.7 0-32-14.3-32-32l0-176.2-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-46.1-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-61.9c0-17.7 14.3-32 32-32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: turkish-lira-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for turkish-lira-sign (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-turkish-lira-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-turkish-lira-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-turkish-lira-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-turkish-lira-sign 3s ease-in-out infinite alternate;
}
</style>