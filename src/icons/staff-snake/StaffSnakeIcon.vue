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
      <path d="M192 32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0c53 0 96 43 96 96s-43 96-96 96l-16 0 0-64 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 192 32 0c53 0 96 43 96 96 0 47.6-34.6 87.1-80 94.7l0-67c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32l-32 0 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-64-32 0c-53 0-96-43-96-96 0-47.6 34.6-87.1 80-94.7l0 67c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32l32 0 0-192-72.6 0c-11.1 19.1-31.7 32-55.4 32l-16 0C21.5 128 0 106.5 0 80S21.5 32 48 32l144 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: staff-snake
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for staff-snake (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-staff-snake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-staff-snake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-staff-snake 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-staff-snake 3s ease-in-out infinite alternate;
}
</style>