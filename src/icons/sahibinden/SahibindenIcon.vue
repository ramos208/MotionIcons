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
      <path d="M0 0v24h24V0zm11.517 4.723c.563-.007 1.13-.004 1.69.063 2.412.054 4.853 2.18 4.879 4.508h-3.319c.009-.694-.603-1.555-1.279-1.732-1.105-.269-2.46-.355-3.43.294-.738.445-1.065 1.672-.095 2.056 2.288 1.083 5.158.846 7.224 2.372 1.698 1.21 1.598 3.666.274 5.086-1.718 1.84-4.636 2.132-7.099 1.782-2.448-.117-4.755-2.245-4.819-4.562h3.311c-.056.832.638 1.557 1.46 1.822 1.27.275 2.726.358 3.93-.19.96-.323 1.024-1.544.284-2.103-1.595-.897-3.565-.924-5.297-1.518-2.012-.39-3.643-2.278-3.26-4.197.424-2.342 3.127-3.727 5.546-3.681z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sahibinden
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sahibinden (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sahibinden {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sahibinden {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sahibinden 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sahibinden 3s ease-in-out infinite alternate;
}
</style>