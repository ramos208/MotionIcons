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
      <path d="M496 544a144 144 0 1 1 0-288 144 144 0 1 1 0 288zM268.6 6.5c12.2-9.3 29.7-8.7 41.2 2l217.6 202c-10.2-1.7-20.7-2.6-31.3-2.6-78.6 0-146.1 47.2-175.8 114.8-5.1-1.8-10.5-2.8-16.2-2.8l-32 0c-26.5 0-48 21.5-48 48l0 96 91 0c6.1 17.3 14.6 33.4 25.1 48L144 512c-35.3 0-64-28.7-64-64l0-176-16 0c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1l224-208 2.4-2zM553.4 339.1c-7.1-5.2-17.1-3.6-22.3 3.5l-53 72.8-26.7-26.8c-6.2-6.2-16.4-6.2-22.6 0-6.2 6.2-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.7s8.9-2.8 11.7-6.6l64-88c5.2-7.1 3.6-17.1-3.5-22.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: house-circle-check
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for house-circle-check (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-house-circle-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-house-circle-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-house-circle-check 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-house-circle-check 3s ease-in-out infinite alternate;
}
</style>