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
      <path d="M23.978 12c0 6.617-5.373 12-11.978 12C5.395 24 .022 18.617.022 12S5.395 0 12 0c1.826 0 3.557.41 5.107 1.146l-1.99 2.567A8.787 8.787 0 0 0 12 3.145c-4.657 0-8.484 3.627-8.815 8.21a9.595 9.595 0 0 0-.023.645c0 4.883 3.964 8.855 8.838 8.855 4.874 0 8.838-3.972 8.838-8.855 0-.652-.07-1.29-.205-1.902l2.309-2.979A11.948 11.948 0 0 1 23.978 12m-2.442-7.253L19.518 7.35l-7.082 9.14-5.778-5.175L8.75 8.97l3.27 2.928L17.38 4.98l1.924-2.484a12.08 12.08 0 0 1 2.231 2.25"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: norton
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for norton (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-norton {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-norton {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-norton 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-norton 3s ease-in-out infinite alternate;
}
</style>