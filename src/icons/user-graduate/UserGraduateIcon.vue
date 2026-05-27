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
      <path d="M241.3-13c-11.4-2.3-23.1-2.3-34.5 0L19.3 24.5C8.1 26.7 0 36.6 0 48 0 58.3 6.5 67.3 16 70.6L16 144 .3 222.6c-.2 .9-.3 1.9-.3 2.9 0 8 6.5 14.6 14.6 14.6l34.9 0c8 0 14.6-6.5 14.6-14.6 0-1-.1-1.9-.3-2.9L48 144 48 77.3 96 86.9 96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-57.1 76.7-15.3C439.9 69.3 448 59.4 448 48s-8.1-21.3-19.3-23.5L241.3-13zM224 224c-44.2 0-80-35.8-80-80l160 0c0 44.2-35.8 80-80 80zM120.1 320.1C58.7 348.3 16 410.3 16 482.3 16 498.7 29.3 512 45.7 512l154.3 0 0-146-57.4-43c-6.5-4.9-15.2-6.2-22.6-2.8zM248 512l154.3 0c16.4 0 29.7-13.3 29.7-29.7 0-72-42.7-134-104.1-162.1-7.4-3.4-16.1-2.1-22.6 2.8l-57.4 43 0 146z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-graduate
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-graduate (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-graduate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-graduate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-graduate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-graduate 3s ease-in-out infinite alternate;
}
</style>