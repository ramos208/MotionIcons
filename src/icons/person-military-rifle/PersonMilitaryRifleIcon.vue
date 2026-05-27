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
      <path d="M128 39c0-13 10-23.8 22.9-24.9L302.7 1.4C312 .7 320 8 320 17.4L320 48c0 8.8-7.2 16-16 16L153 64c-13.8 0-25-11.2-25-25zm17.6 57l156.8 0c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16zm228 364.3L320 369.7 320 480c0 1.3-.1 2.5-.2 3.8L145.5 234.9c16.6-7.1 34.6-10.9 53.3-10.9l50.4 0c15.9 0 31.3 2.8 45.8 7.9L389.9 67.7c-7.7-4.4-10.3-14.2-5.9-21.9s14.2-10.3 21.9-5.9l27.7 16c7.7 4.4 10.3 14.2 5.9 21.9l-55.5 96.1 1.6 .9c15.3 8.8 20.6 28.4 11.7 43.7L360.7 282c2 2.8 3.9 5.8 5.7 8.8l76.1 128.8c11.2 19 4.9 43.5-14.1 54.8s-43.5 4.9-54.8-14.1zM288 512l-128 0c-17.7 0-32-14.3-32-32l0-110.3-53.6 90.6c-11.2 19-35.8 25.3-54.8 14.1S-5.7 438.7 5.6 419.7L81.7 290.8c9.4-15.8 21.7-29.3 36-40L299.1 510c-3.5 1.3-7.2 2-11.1 2zM264 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-military-rifle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-military-rifle (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-military-rifle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-military-rifle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-military-rifle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-military-rifle 3s ease-in-out infinite alternate;
}
</style>