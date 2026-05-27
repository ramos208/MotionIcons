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
      <path d="M252.8 0L176 0c-26.5 0-48 21.5-48 48l0 16 112 0 0-16c0-17.5 4.7-33.9 12.8-48zM128 112l0 128c0 20.1-9.5 39.1-25.6 51.2l-64 48c-24.2 18.1-38.4 46.6-38.4 76.8 0 53 43 96 96 96 15.4 0 30.5-3.7 44-10.7-17.6-23.9-28-53.4-28-85.3 0-45.3 21.3-88 57.6-115.2l64-48c4-3 6.4-7.8 6.4-12.8l0-128-112 0zm160 0l0 128c0 20.1-9.5 39.1-25.6 51.2l-64 48c-24.2 18.1-38.4 46.6-38.4 76.8 0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2l115.2-86.4C461 382.2 480 344.3 480 304l0-192-192 0zM480 64l0-16c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 16 192 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: socks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for socks (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-socks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-socks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-socks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-socks 3s ease-in-out infinite alternate;
}
</style>