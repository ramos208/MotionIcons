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
      <path d="M64 64l512 0 0 112c-37.6 9.4-64 43.2-64 82l0 76.4c-21-9.7-43.5-14.5-66-14.4-10 .1-20.1 1.1-30 3.1l0-35.1c0-53-43-96-96-96s-96 43-96 96l0 32.7c-5.3-.5-10.7-.8-16-.7-27.7 .2-55.4 7.8-80 23l0-85c0-38.8-26.4-72.6-64-82L64 64zM403.4 444.1C379.1 462.3 351.1 480 320 480s-59.1-17.7-83.4-35.9c-21.3-16.1-49.9-16.1-71.2 0-23.8 17.9-54.1 35.5-88.1 35.3-20.4-.1-40.7-6.7-59.8-21.1-10.6-8-12.7-23-4.7-33.6s23-12.7 33.6-4.7c11.3 8.5 21.6 11.4 31.2 11.5 17.6 .1 37.3-9.4 58.9-25.7 38.4-29 90.5-29 129 0 24 18.1 40.7 26.3 54.5 26.3s30.5-8.2 54.5-26.3c38.4-29 90.5-29 129 0 16.9 12.7 32.9 21.5 47.8 24.6 13.7 2.8 27.4 .9 42.3-10.3 10.6-8 25.6-5.9 33.6 4.7s5.9 25.6-4.7 33.6c-26.4 19.9-54.2 24.4-80.7 19.1-25.3-5.1-48.1-18.9-67.2-33.3-21.3-16.1-49.9-16.1-71.2 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bridge-water
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bridge-water (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bridge-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bridge-water {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bridge-water 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bridge-water 3s ease-in-out infinite alternate;
}
</style>