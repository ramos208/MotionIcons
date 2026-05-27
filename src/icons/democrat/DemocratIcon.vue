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
      <path d="M64 32c0-8.9 3.8-20.9 6.2-27.3 1-2.8 3.8-4.7 6.8-4.7 1.9 0 3.8 .7 5.2 2.1L128 45.7 173.8 2.1c1.4-1.3 3.2-2.1 5.2-2.1 3 0 5.8 1.8 6.8 4.7 2.4 6.5 6.2 18.4 6.2 27.3 0 26.5-21.9 42-29.5 46.6l76.2 72.6c6 5.7 13.9 8.8 22.1 8.8l219.2 0 32 0c40.3 0 78.2 19 102.4 51.2l19.2 25.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4l-19.2-25.6c-5.3-7-11.8-12.8-19.2-17l0 87.4-352 0-40.4-94.3c-3.9-9.2-15.3-12.6-23.6-7l-42.1 28c-9.1 6.1-19.7 9.3-30.7 9.3l-2 0C23.9 256 0 232.1 0 202.7 0 190.6 4.1 178.9 11.7 169.4L87.6 74.6C78.1 67.4 64 53.2 64 32zM544 352l0 128c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-160 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-128 352 0zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm248-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM368 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: democrat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for democrat (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-democrat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-democrat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-democrat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-democrat 3s ease-in-out infinite alternate;
}
</style>