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
      <path d="M288 0c-20.5 0-40.1 8.1-54.6 22.6L22.6 233.4C8.1 247.9 0 267.5 0 288 0 300.2 2.9 312.1 8.2 322.7L322.7 8.2C312.1 2.9 300.2 0 288 0zM224 512c20.5 0 40.1-8.1 54.6-22.6L489.4 278.6c14.5-14.5 22.6-34.1 22.6-54.6 0-12.2-2.9-24.1-8.2-34.7L189.3 503.8c10.7 5.4 22.6 8.2 34.7 8.2zM456.6 168.6c31.2-31.2 31.2-81.9 0-113.1s-81.9-31.2-113.1 0l-288 288c-31.2 31.2-31.2 81.9 0 113.1s81.9 31.2 113.1 0l288-288z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hotdog
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hotdog (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hotdog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hotdog {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hotdog 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hotdog 3s ease-in-out infinite alternate;
}
</style>