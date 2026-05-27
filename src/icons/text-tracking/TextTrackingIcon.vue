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
      <path d="M22 19H2M22 19C22 18.4398 20.4046 17.3932 20 17M22 19C22 19.5602 20.4046 20.6068 20 21M2 19C2 18.4398 3.59544 17.3932 4 17M2 19C2 19.5602 3.59544 20.6068 4 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 14L20.0714 8.5M20.0714 8.5L18.3793 3.67442C18.3324 3.54046 18.3089 3.47349 18.2792 3.4166C18.1653 3.19858 17.9709 3.0495 17.7493 3.01024C17.6915 3 17.6277 3 17.5 3C17.3723 3 17.3085 3 17.2507 3.01024C17.0291 3.0495 16.8347 3.19858 16.7208 3.4166C16.6911 3.47349 16.6676 3.54046 16.6207 3.67442L14.9286 8.5M20.0714 8.5L14.9286 8.5M14.9286 8.5L13 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 3L5.62066 13.3256C5.66763 13.4595 5.69112 13.5265 5.72083 13.5834C5.83469 13.8014 6.02907 13.9505 6.25065 13.9898C6.30847 14 6.37231 14 6.5 14C6.62768 14 6.69153 14 6.74934 13.9898C6.97093 13.9505 7.16531 13.8014 7.27917 13.5834C7.30888 13.5265 7.33237 13.4595 7.37934 13.3256L11 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: text-tracking
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for text-tracking (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-text-tracking {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-text-tracking {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-text-tracking 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-text-tracking 3s ease-in-out infinite alternate;
}
</style>