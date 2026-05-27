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
      <path d="M4.8 0A4.79 4.79 0 0 0 0 4.8v14.4C0 21.86 2.14 24 4.8 24h14.4c2.66 0 4.8-2.14 4.8-4.8V4.8C24 2.14 21.86 0 19.2 0H4.8zM12 3.449v.001c4.242 0 7.833 1.904 7.833 6.17 0 2.932-3.86 7.815-6.164 10.164-.99 1.008-2.32 1.036-3.338 0-2.303-2.349-6.164-7.232-6.164-10.164 0-4.162 3.476-6.171 7.833-6.171zm3.54 2.155l-5.05 4.96 5.05 4.956a1.84 1.84 0 0 0 0-2.634v-.001l-2.366-2.323 2.366-2.323a1.84 1.84 0 0 0 0-2.635zm-7.349.144v9.772a1.86 1.86 0 0 0 1.868-1.852V7.602a1.86 1.86 0 0 0-1.866-1.854h-.002z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: klook
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for klook (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-klook {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-klook {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-klook 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-klook 3s ease-in-out infinite alternate;
}
</style>