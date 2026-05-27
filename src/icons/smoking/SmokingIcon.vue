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
      <path d="M360 0c13.3 0 24 10.7 24 24l0 19c0 40.3 16 79 44.5 107.5l21 21C469 191 480 217.4 480 245l0 19c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-19c0-14.9-5.9-29.1-16.4-39.6l-21-21C357.1 146.9 336 96 336 43l0-19c0-13.3 10.7-24 24-24zM552 288c-13.3 0-24-10.7-24-24l0-19c0-40.3-16-79-44.5-107.5l-21-21C443 97 432 70.6 432 43l0-19c0-13.3 10.7-24 24-24s24 10.7 24 24l0 19c0 14.9 5.9 29.1 16.4 39.6l21 21C554.9 141.1 576 192 576 245l0 19c0 13.3-10.7 24-24 24zM320 448l96 0 0-32-96 0 0 32zM0 416c0-35.3 28.7-64 64-64l384 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L64 512c-35.3 0-64-28.7-64-64l0-32zm576-40l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: smoking
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for smoking (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-smoking {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-smoking {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-smoking 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-smoking 3s ease-in-out infinite alternate;
}
</style>