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
      <path d="M8.91 16.106c-2.129 0-3.659-1.794-3.659-4.266 0-2.148 1.468-4.095 3.488-4.095 2.275 0 3.545 1.857 3.545 1.857l2.939-3.298c-.91-1.062-2.598-2.882-6.503-2.882-4.388 0-8.209 3.489-8.209 8.456 0 4.766 3.475 8.532 8.266 8.532 3.855 0 5.572-2.017 6.54-3.129l-2.831-2.969c0 .001-1.415 1.794-3.576 1.794zM18.283 0v9.988h-2.064a1.92 1.92 0 1 0 0 3.84h2.064V24h5.205V0h-5.205z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: castorama
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for castorama (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-castorama {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-castorama {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-castorama 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-castorama 3s ease-in-out infinite alternate;
}
</style>