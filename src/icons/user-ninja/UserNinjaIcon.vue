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
      <path d="M352 128c0 70.7-57.3 128-128 128-57.2 0-105.6-37.5-122-89.3-1.1 1.3-2.2 2.6-3.5 3.8-15.8 15.8-38.8 20.7-53.6 22.1-8.1 .8-14.6-5.7-13.8-13.8 1.4-14.7 6.3-37.8 22.1-53.6 5.8-5.8 12.6-10.1 19.6-13.4-7-3.2-13.8-7.6-19.6-13.4-15.8-15.8-20.7-38.8-22.1-53.6-.8-8.1 5.7-14.6 13.8-13.8 14.7 1.4 37.8 6.3 53.6 22.1 4.8 4.8 8.7 10.4 11.7 16.1 21.3-41.2 64.3-69.4 113.8-69.4 70.7 0 128 57.3 128 128zM144 112c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L160 96c-8.8 0-16 7.2-16 16zm-1.4 211l67 50.2c8.5 6.4 20.3 6.4 28.8 0l67-50.2c6.5-4.9 15.2-6.2 22.6-2.8 61.4 28.2 104.1 90.2 104.1 162.1 0 16.4-13.3 29.7-29.7 29.7L45.7 512c-16.4 0-29.7-13.3-29.7-29.7 0-72 42.7-134 104.1-162.1 7.4-3.4 16.1-2.1 22.6 2.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-ninja
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-ninja (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-ninja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-ninja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-ninja 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-ninja 3s ease-in-out infinite alternate;
}
</style>