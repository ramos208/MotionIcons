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
      <path d="M7 3H17C18.8692 3 19.8038 3 20.5 3.40192C20.9561 3.66523 21.3348 4.04394 21.5981 4.5C22 5.19615 22 6.13077 22 8C22 9.86923 22 10.8038 21.5981 11.5C21.3348 11.9561 20.9561 12.3348 20.5 12.5981C19.8038 13 18.8692 13 17 13H16.6063C15.9194 13 15.5759 13 15.2546 12.9286C14.8244 12.8331 14.4206 12.6439 14.0718 12.3746C13.8112 12.1734 13.5913 11.9096 13.1516 11.3819C12.8012 10.9614 12.626 10.7512 12.4249 10.6568C12.1557 10.5305 11.8443 10.5305 11.5751 10.6568C11.374 10.7512 11.1988 10.9614 10.8484 11.3819C10.4087 11.9096 10.1888 12.1734 9.92823 12.3746C9.57943 12.6439 9.17559 12.8331 8.74542 12.9286C8.42406 13 8.08061 13 7.39369 13H7C5.13077 13 4.19615 13 3.5 12.5981C3.04394 12.3348 2.66523 11.9561 2.40192 11.5C2 10.8038 2 9.86923 2 8C2 6.13077 2 5.19615 2.40192 4.5C2.66523 4.04394 3.04394 3.66523 3.5 3.40192C4.19615 3 5.13077 3 7 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 6H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.1006 19L10.0803 17M12.1006 19L10.0803 21M12.1006 19C7.05072 19 2.8089 17 2 15M15.1311 18.7711C18.6024 18.2314 21.2663 16.7892 22 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vr
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vr (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vr {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vr 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vr 3s ease-in-out infinite alternate;
}
</style>