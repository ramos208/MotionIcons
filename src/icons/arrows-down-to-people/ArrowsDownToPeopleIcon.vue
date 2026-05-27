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
      <path d="M113 153c-9.4 9.4-24.6 9.4-33.9 0L15 89C5.7 79.6 5.7 64.4 15 55S39.6 45.7 49 55L72 78.1 72-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 86.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64zm320 0c-9.4 9.4-24.6 9.4-33.9 0L335 89c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23 0-86.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 86.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64zM256 192a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm0 160c53 0 96 43 96 96l0 32c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32c0-53 43-96 96-96zM32 288a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm352 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM80 368c15.3 0 29.6 4.3 41.8 11.8-6.3 16.2-9.8 33.8-9.8 52.2l0 48c0 11.4 2.4 22.2 6.7 32l-87.8 0C13.8 512 0 498.2 0 481.1L0 448c0-44.2 35.8-80 80-80zM393.3 512c4.3-9.8 6.7-20.6 6.7-32l0-48c0-18.4-3.5-36-9.8-52.2 12.2-7.5 26.5-11.8 41.8-11.8 44.2 0 80 35.8 80 80l0 33.1c0 17-13.8 30.9-30.9 30.9l-87.8 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrows-down-to-people
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for arrows-down-to-people (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrows-down-to-people {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-arrows-down-to-people {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrows-down-to-people 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrows-down-to-people 3s ease-in-out infinite alternate;
}
</style>