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
      <path d="M20.949 11.496C20.573 5.365 13.894.06 11.143 0 8.391-.059 3.247 6.435 3.04 13.033 2.844 19.219 8.124 23.462 10.397 24c.063-2.91.296-13.627.335-14.877.082-2.553.207-6.527.634-6.659.244-.076.578 2.158.537 3.478-.008.252-.011 1.068-.011 2.226.46-.469.94-.955 1.233-1.242.8-.787 1.155-.693.77.009-.236.432-1.253 1.868-2.001 2.909.004 2.099.013 4.74.023 7.202 1.057-1.237 2.35-2.72 3.03-3.378 1.425-1.382 1.576-1.207.903.243-.413.888-2.434 3.258-3.925 5.127.009 2.185.016 4.021.018 4.898 4-.88 9.373-6.42 9.006-12.44"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: octobercms
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for octobercms (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-octobercms {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-octobercms {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-octobercms 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-octobercms 3s ease-in-out infinite alternate;
}
</style>