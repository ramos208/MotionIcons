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
      <path d="M71 12.5c-8.6 1-15 8.2-15 16.8 0 9.3 7.5 16.8 16.7 16.9l111.4 0c8.8-.1 15.9-7.2 15.9-16L200 16c0-9.5-8.3-17-17.8-15.9L71 12.5zM189.5 78.1l-122.9 0c-1.6 5.7-2.5 11.7-2.5 17.9 0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.2-.9-12.2-2.5-17.9zM32 256l0 32c0 17.7 14.3 32 32 32l128 0c1.8 0 3.5-.1 5.2-.4L53 208.6C40.1 220.3 32 237.2 32 256zm190.2 42.5c1.1-3.3 1.8-6.8 1.8-10.5l0-32c0-35.3-28.7-64-64-64l-64 0c-3.7 0-7.4 .3-10.9 .9L222.2 298.5zM384 160a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-35.3 0-64 28.7-64 64l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32c0-35.3-28.7-64-64-64l-64 0zM215.8 450.1c5.2-4.6 8.2-11.1 8.2-18.1s-3-13.5-8.2-18.1l-64-56c-7.1-6.2-17.1-7.7-25.7-3.8S112 366.6 112 376l0 32-88 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0 0 32c0 9.4 5.5 18 14.1 21.9s18.6 2.4 25.7-3.8l64-56zM288 431.9c0 6.9 3 13.5 8.1 18.1l64 56.4c7.1 6.2 17.1 7.8 25.7 3.9S400 497.8 400 488.4l0-32.4 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-32c0-9.4-5.5-18-14.1-21.9s-18.6-2.4-25.7 3.8l-64 56c-5.2 4.5-8.2 11.1-8.2 18z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-military-to-person
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-military-to-person (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-military-to-person {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-military-to-person {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-military-to-person 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-military-to-person 3s ease-in-out infinite alternate;
}
</style>