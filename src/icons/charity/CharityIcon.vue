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
      <path d="M7 19H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 16C19.7767 16.0234 20.24 16.1102 20.5607 16.4313C21 16.8713 21 17.5794 21 18.9957C21 20.4119 21 21.12 20.5607 21.56C20.1213 22 19.4142 22 18 22H6C4.58579 22 3.87868 22 3.43934 21.56C3 21.12 3 20.4119 3 18.9957C3 17.5794 3 16.8713 3.43934 16.4313C3.75999 16.1102 4.22328 16.0234 5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.3151 19C15.0417 18.3718 15.5 17.4526 15.5 16.4286C15.5 14.535 13.933 13 12 13C10.067 13 8.5 14.535 8.5 16.4286C8.5 17.4526 8.95829 18.3718 9.6849 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 10L17.6052 10C17.311 10 17.0209 9.93373 16.7578 9.80643L14.7159 8.81844C14.4528 8.69114 14.1627 8.62487 13.8685 8.62487L12.8259 8.62487C11.8175 8.62487 11 7.83382 11 6.858C11 6.81856 11.027 6.7839 11.0662 6.77306L13.6071 6.07055C14.0629 5.94453 14.551 5.98842 14.975 6.19357L17.1579 7.24974M11 7.5L6.40723 8.91108C5.59303 9.16476 4.71292 8.86396 4.2029 8.1577C3.83414 7.64706 3.98428 6.91581 4.52154 6.60583L12.0371 2.26947C12.5151 1.99367 13.0791 1.92638 13.6048 2.08239L20 3.98005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: charity
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for charity (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-charity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-charity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-charity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-charity 3s ease-in-out infinite alternate;
}
</style>