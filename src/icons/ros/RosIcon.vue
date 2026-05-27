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
      <path d="M2.807 0C1.353 0 .173 1.22.173 2.722c0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.635-1.22 2.635-2.723S4.262 0 2.807 0zM12 0c-1.455 0-2.634 1.22-2.634 2.722 0 1.504 1.18 2.723 2.634 2.723 1.455 0 2.634-1.22 2.634-2.723S13.454 0 12 0zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723S22.647 0 21.193 0zM2.807 9.277C1.353 9.277.173 10.497.173 12s1.18 2.722 2.634 2.722c1.455 0 2.635-1.219 2.635-2.722 0-1.504-1.18-2.723-2.635-2.723zm9.193 0c-1.455 0-2.634 1.22-2.634 2.723s1.18 2.722 2.634 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zm9.193 0c-1.455 0-2.635 1.22-2.635 2.723s1.18 2.722 2.635 2.722c1.455 0 2.634-1.219 2.634-2.722 0-1.504-1.18-2.723-2.634-2.723zM2.807 18.555c-1.454 0-2.634 1.22-2.634 2.722C.173 22.781 1.353 24 2.807 24c1.455 0 2.635-1.22 2.635-2.723s-1.18-2.722-2.635-2.722zm9.193 0c-1.455 0-2.634 1.22-2.634 2.722C9.366 22.781 10.546 24 12 24c1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722zm9.193 0c-1.455 0-2.635 1.22-2.635 2.722 0 1.504 1.18 2.723 2.635 2.723 1.455 0 2.634-1.22 2.634-2.723s-1.18-2.722-2.634-2.722z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ros
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ros (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ros {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ros {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ros 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ros 3s ease-in-out infinite alternate;
}
</style>