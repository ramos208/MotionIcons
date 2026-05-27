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
      <path d="M18.5201 6.22967C18.812 7.89634 17.5003 9 17.5003 9C17.5003 9 15.8968 8.437 15.6049 6.77033C15.313 5.10366 16.6247 4 16.6247 4C16.6247 4 18.2282 4.56301 18.5201 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.927 13.5887C19.5821 14.7178 17.9368 14.0892 17.9368 14.0892C17.9368 14.0892 17.6365 12.3314 18.9814 11.2023C20.3262 10.0732 21.9715 10.7019 21.9715 10.7019C21.9715 10.7019 22.2718 12.4596 20.927 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.7335 19.8262C15.2335 19.2506 15 17.6366 15 17.6366C15 17.6366 16.2665 16.5982 17.7665 17.1738C19.2665 17.7494 19.5 19.3634 19.5 19.3634C19.5 19.3634 18.2335 20.4018 16.7335 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 17.6366C16.4051 16.4358 18.0006 14.0564 18.0006 11.7273C18.0006 10.7628 17.8457 9.84221 17.5644 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.47987 6.22967C5.18799 7.89634 6.49968 9 6.49968 9C6.49968 9 8.10325 8.437 8.39513 6.77033C8.68701 5.10366 7.37532 4 7.37532 4C7.37532 4 5.77175 4.56301 5.47987 6.22967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.07304 13.5887C4.41792 14.7178 6.06316 14.0892 6.06316 14.0892C6.06316 14.0892 6.36352 12.3314 5.01864 11.2023C3.67375 10.0732 2.02851 10.7019 2.02851 10.7019C2.02851 10.7019 1.72816 12.4596 3.07304 13.5887Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.26651 19.8262C8.76651 19.2506 9 17.6366 9 17.6366C9 17.6366 7.73349 16.5982 6.23349 17.1738C4.73349 17.7494 4.5 19.3634 4.5 19.3634C4.5 19.3634 5.76651 20.4018 7.26651 19.8262Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 17.6366C7.59489 16.4358 5.99945 14.0564 5.99945 11.7273C5.99945 10.7628 6.15433 9.84221 6.43559 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 10L12 9.5V14.5M13 14.5H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: laurel-wreath-first02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for laurel-wreath-first02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-laurel-wreath-first02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-laurel-wreath-first02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-laurel-wreath-first02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-laurel-wreath-first02 3s ease-in-out infinite alternate;
}
</style>