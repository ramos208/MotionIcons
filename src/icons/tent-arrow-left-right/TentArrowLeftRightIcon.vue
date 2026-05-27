<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M-.5 113c-9.4-9.4-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-31 31 310.1 0 54.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-102.1 0-.1 0-262 0 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-72-72zM37.1 476L60.3 292.6c1.2-9.7 6.8-18.3 15.1-23.3L238.8 170c10.2-6.2 22.9-6.2 33.1-.1l165.5 99.4c8.4 5 14 13.7 15.3 23.4L475.9 476c2.4 19.1-12.5 36-31.7 36l-71.9 0c-12.1 0-23.2-6.8-28.6-17.7L275.4 357.9c-1.8-3.6-5.5-5.9-9.5-5.9-5.9 0-10.6 4.7-10.6 10.6l0 117.4c0 17.7-14.3 32-32 32L68.8 512c-19.3 0-34.2-16.9-31.7-36z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tent-arrow-left-right
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for tent-arrow-left-right (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tent-arrow-left-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tent-arrow-left-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tent-arrow-left-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tent-arrow-left-right 3s ease-in-out infinite alternate;
}
</style>