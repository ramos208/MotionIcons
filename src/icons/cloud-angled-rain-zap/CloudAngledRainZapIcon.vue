<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M17.4776 8.69731C17.485 8.69727 17.4925 8.69726 17.5 8.69726C19.9853 8.69726 22 10.6103 22 12.9702C22 14.8307 20.7478 16.4134 19 17M17.4776 8.69731C17.4924 8.54092 17.5 8.38254 17.5 8.22248C17.5 5.33819 15.0376 3 12 3C9.12324 3 6.76233 5.09718 6.52042 7.76927M17.4776 8.69731C17.3753 9.77451 16.9286 10.7574 16.2428 11.5459M6.52042 7.76927C3.98398 7.99846 2 10.0269 2 12.4954C2 14.0487 2.78555 15.4278 4 16.2939M6.52042 7.76927C6.67826 7.75501 6.83823 7.74771 7 7.74771C8.12582 7.74771 9.16474 8.10103 10.0005 8.69726" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.0784 13.5L7.30434 16.1838C7.06684 16.5431 6.94808 16.7227 7.02165 16.8614C7.09522 17 7.30931 17 7.73747 17H9.26253C9.69069 17 9.90478 17 9.97835 17.1386C10.0519 17.2773 9.93316 17.4569 9.69566 17.8162L7.9216 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 18.5L15 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 18.5L12 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloud-angled-rain-zap
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloud-angled-rain-zap (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloud-angled-rain-zap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloud-angled-rain-zap {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloud-angled-rain-zap 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloud-angled-rain-zap 3s ease-in-out infinite alternate;
}
</style>