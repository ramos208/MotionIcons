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
      <path d="M15 3H12V20H15V14.5H15.9064C16.2723 14.5 16.609 14.6999 16.7843 15.0211L19.2157 19.4789C19.391 19.8001 19.7277 20 20.0936 20H23L19 13L23 8H20C19.6852 8 19.3889 8.14819 19.2 8.4L16.8 11.6C16.6111 11.8518 16.3148 12 16 12H15V3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.50063 11.0005C4.9056 9.54528 7.66729 10.5005 8.50063 11.0005L10.0006 9.5C10.0006 9.5 8.73595 8 6.00085 8C3.93463 8 1.35357 8.41898 1.35357 11.919C1.35357 15.419 7.70823 14.6943 6.70911 16.9978C6.13523 18.321 3.15757 17.1094 2.15757 16.4428L1 18.7185C1.83333 19.2185 3.90085 20 5.50085 20C7.29193 20 10.0006 18.9128 10.0006 15.7212C10.0006 12.5296 3.99014 12.8348 4.50063 11.0005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: skool
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for skool (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-skool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-skool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-skool 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-skool 3s ease-in-out infinite alternate;
}
</style>