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
      <path d="M17.4776 8.39801L17.5 8.39795C19.9853 8.39795 22 10.3784 22 12.8214C22 14.3551 21.206 15.7065 20 16.5M17.4776 8.39801C17.4924 8.23611 17.5 8.07215 17.5 7.90646C17.5 4.92055 15.0376 2.5 12 2.5C9.12324 2.5 6.76233 4.67106 6.52042 7.43728M17.4776 8.39801C17.3753 9.51316 16.9286 10.5307 16.2428 11.3469M6.52042 7.43728C3.98398 7.67454 2 9.77448 2 12.3299C2 14.0886 2.93963 15.6315 4.35232 16.5M6.52042 7.43728C6.67826 7.42251 6.83823 7.41496 7 7.41496C8.12582 7.41496 9.16474 7.78072 10.0005 8.39795" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 15.9778C9.14883 15.0431 10.5209 14.5 11.9946 14.5C13.4729 14.5 14.849 15.0466 16 15.9866M14.1743 18.5C13.5182 18.0909 12.7779 17.8607 11.9946 17.8607C11.2152 17.8607 10.4784 18.0886 9.82477 18.4938" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 21.5H12.0064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wireless-cloud-access
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for wireless-cloud-access (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wireless-cloud-access {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wireless-cloud-access {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wireless-cloud-access 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wireless-cloud-access 3s ease-in-out infinite alternate;
}
</style>