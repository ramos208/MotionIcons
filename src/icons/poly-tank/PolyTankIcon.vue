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
      <path d="M9.375 4.7686C8.57164 4.93458 7.78616 5.17556 7.02247 5.48619C6.12831 5.84989 5.68124 6.03174 5.34062 6.53801C5 7.04427 5 7.6177 5 8.76457V17.024C5 18.4927 5 19.2271 5.47504 19.7869C5.95008 20.3467 6.59936 20.4538 7.89792 20.668C9.21368 20.885 10.5873 21 12 21C13.4127 21 14.7863 20.885 16.1021 20.668C17.4006 20.4538 18.0499 20.3467 18.525 19.7869C19 19.2271 19 18.4927 19 17.024V8.76457C19 7.6177 19 7.04427 18.6594 6.53801C18.3188 6.03174 17.8717 5.84989 16.9775 5.48619C16.2138 5.17556 15.4284 4.93458 14.625 4.7686M9.375 4.7686C10.2313 4.5917 11.1078 4.5 12 4.5C12.8922 4.5 13.7687 4.5917 14.625 4.7686M9.375 4.7686V4C9.375 3.05719 9.375 2.58579 9.66789 2.29289C9.96079 2 10.4322 2 11.375 2H12.625C13.5678 2 14.0392 2 14.3321 2.29289C14.625 2.58579 14.625 3.05719 14.625 4V4.7686" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 20.5V19C10 18.0572 10 17.5858 10.2929 17.2929C10.5858 17 11.0572 17 12 17C12.9428 17 13.4142 17 13.7071 17.2929C14 17.5858 14 18.0572 14 19V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 12C16.8564 11.3568 14.4889 11 12 11C9.51113 11 7.14362 11.3568 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: poly-tank
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for poly-tank (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-poly-tank {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-poly-tank {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-poly-tank 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-poly-tank 3s ease-in-out infinite alternate;
}
</style>