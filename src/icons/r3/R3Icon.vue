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
      <path d="M24 13.457c0 .841-.688 1.53-1.53 1.53-.842 0-1.53-.689-1.53-1.53a1.53 1.53 0 1 1 3.06 0zM6.147 2.853c-1.123 0-2.172.3-3.08.828v-.828H0v12.134h3.067V9a3.077 3.077 0 0 1 3.08-3.08l1.029-.007 2.105-3.06H6.147zm8.746 6.08 2.078-3.02v-3.06h-6.615l-2.104 3.06h4.99l-2.565 3.735 1.53 2.653a3.098 3.098 0 0 1 4.65 2.686c0 1.717-1.39 3.1-3.1 3.1-1.71 0-3.1-1.39-3.1-3.1h-3.06c0 3.4 2.76 6.16 6.154 6.16 3.4 0 6.16-2.76 6.16-6.16a6.162 6.162 0 0 0-5.018-6.054z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: r3
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for r3 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-r3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-r3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-r3 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-r3 3s ease-in-out infinite alternate;
}
</style>