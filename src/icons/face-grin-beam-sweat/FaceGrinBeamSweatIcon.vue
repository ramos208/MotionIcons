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
      <path d="M546.2-.1c14.7 17.8 29.8 40.1 29.8 64.1 0 36.4-27.6 64-64 64s-64-27.6-64-64c0-24 15.2-46.3 29.8-64.1 8.8-10.7 18.5-20.8 29-30 3-2.6 7.4-2.6 10.4 0 10.5 9.1 20.1 19.3 29 30zM288 0c42.5 0 82.6 10.4 117.8 28.7-3.6 10.9-5.8 22.7-5.8 35.3 0 62.9 49.1 112 112 112 6.4 0 12.7-.5 18.8-1.5 8.6 25.6 13.2 53 13.2 81.5 0 141.4-114.6 256-256 256S32 397.4 32 256 146.6 0 288 0zM418.7 308.9C379.5 321.1 335.1 328 288 328s-91.5-6.9-130.7-19.1c-11.9-3.7-23.9 6.3-19.6 18.1 22.4 61.3 81.3 105.1 150.3 105.1s127.9-43.8 150.3-105.1c4.3-11.8-7.7-21.8-19.6-18.1zM208 180c15.5 0 28 12.5 28 28l0 8c0 11 9 20 20 20s20-9 20-20l0-8c0-37.6-30.4-68-68-68s-68 30.4-68 68l0 8c0 11 9 20 20 20s20-9 20-20l0-8c0-15.5 12.5-28 28-28zm132 28c0-15.5 12.5-28 28-28s28 12.5 28 28l0 8c0 11 9 20 20 20s20-9 20-20l0-8c0-37.6-30.4-68-68-68s-68 30.4-68 68l0 8c0 11 9 20 20 20s20-9 20-20l0-8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-grin-beam-sweat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-grin-beam-sweat (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-grin-beam-sweat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-grin-beam-sweat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-grin-beam-sweat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-grin-beam-sweat 3s ease-in-out infinite alternate;
}
</style>