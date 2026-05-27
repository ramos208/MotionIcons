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
      <path d="M4 14H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 22L5.93056 21.0694C6.45933 20.5407 6.72371 20.2763 7.05684 20.126C7.38997 19.9756 7.76314 19.9523 8.50947 19.9057L11.7619 19.7024C13.3604 19.6025 14.1597 19.5525 14.863 19.2148C15.5664 18.877 16.1051 18.2844 17.1824 17.0993L20 14H16.5L14.7071 15.7929C14.5879 15.9121 14.5282 15.9718 14.4662 16.0244C14.1472 16.2954 13.7512 16.4594 13.3341 16.4934C13.2529 16.5 13.1686 16.5 13 16.5M2 19L5.07774 15.9223C5.81669 15.1833 6.18617 14.8138 6.62171 14.5564C6.94612 14.3647 7.29599 14.2198 7.66095 14.126C8.15093 14 8.67345 14 9.71849 14H10.5C10.9647 14 11.197 14 11.3902 14.0384C12.1836 14.1962 12.8038 14.8164 12.9616 15.6098C13 15.803 13 16.0353 13 16.5M13 16.5H9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 11.5C5 7.08171 8.58171 3.5 13 3.5M13 3.5C17.4183 3.5 21 7.08171 21 11.5M13 3.5V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: serving-food
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for serving-food (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-serving-food {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-serving-food {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-serving-food 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-serving-food 3s ease-in-out infinite alternate;
}
</style>