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
      <path d="M19.02 0c-1.118 0-1.935.362-2.474.946A.189.189 0 0 1 16.35 1a16.824 16.824 0 0 0-2.634-.623.184.184 0 0 0-.205.158.181.181 0 0 0 .003.07c.186.699 1.305 5.133 2.205 8.51.544 2.043-.866 4.05-2.98 4.044h-1.31c-2.136 0-3.433-2.014-2.94-4.022.83-3.393 1.968-7.792 2.152-8.517a.183.183 0 0 0-.13-.226.177.177 0 0 0-.07-.005 14.358 14.358 0 0 0-3.048.698.188.188 0 0 1-.208-.056C6.646.398 5.806.003 4.643.003c-2.254 0-3.287 1.473-3.287 3.29 0 .952.905 2.24 1.766 3.253a.188.188 0 0 1 .034.18l-1.468 4.259a.034.034 0 0 0 0 .011c-.038.148-.604 2.662 3.699 6.661 1.286 1.2 5.77 5.52 6.576 6.293a.182.182 0 0 0 .251 0l6.774-6.293c4.648-4.334 3.54-6.672 3.54-6.672L20.882 6.27a.183.183 0 0 1 .028-.175c.733-.925 1.4-1.991 1.4-2.808C22.31 1.473 21.274 0 19.02 0Zm-8.025 7.132a.525.525 0 0 0-.527.524l.217 2.157v.003a.525.525 0 0 0 .526.524h1.755a.525.525 0 0 0 .524-.53l.208-2.154a.525.525 0 0 0-.526-.524z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kuma
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kuma (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kuma {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kuma {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kuma 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kuma 3s ease-in-out infinite alternate;
}
</style>