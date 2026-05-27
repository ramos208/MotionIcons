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
      <path d="m22.682 19.189-.002-.002-3.07-3.068a7.027 7.027 0 0 0 1.332-4.12 7.068 7.068 0 0 0-7.068-7.067V1.037A1.04 1.04 0 0 0 12.653.016L1.67 1.965a.832.832 0 0 0-.687.818v18.434c0 .403.29.748.687.818l10.982 1.949a1.04 1.04 0 0 0 1.22-1.022v-3.894a7.027 7.027 0 0 0 4.12-1.332l3.069 3.07c.446.446 1.17.447 1.617 0h.001c.447-.447.448-1.17.002-1.617zm-8.808-.62a6.576 6.576 0 0 1-6.569-6.57 6.576 6.576 0 0 1 6.569-6.567A6.576 6.576 0 0 1 20.442 12a6.576 6.576 0 0 1-6.568 6.568zm5.28-6.57a5.287 5.287 0 0 1-5.28 5.282c-2.913 0-5.282-2.369-5.282-5.28s2.37-5.282 5.282-5.282a5.287 5.287 0 0 1 5.28 5.28z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: quicklook
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for quicklook (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-quicklook {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-quicklook {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-quicklook 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-quicklook 3s ease-in-out infinite alternate;
}
</style>