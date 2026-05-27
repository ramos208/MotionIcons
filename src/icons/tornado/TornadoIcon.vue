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
      <path d="M0 32L0 45.6C0 62.7 1.7 79.6 5 96l352.8 0c3.2-6.9 7.5-13.3 13-18.8l38.6-38.6c4.2-4.2 6.6-10 6.6-16 0-12.5-10.1-22.6-22.6-22.6L32 0C14.3 0 0 14.3 0 32zM355.7 144l-336 0c12.4 29.7 30.2 56.8 52.7 80l339.6 0-47.2-62.9c-3.9-5.2-7-11-9.2-17.1zM242.6 334.7c8.2 4.8 15.8 10.7 22.5 17.3L445 352c2-9.8 3-19.9 3-30.1 0-17.1-2.9-34-8.6-49.9L136 272 242.6 334.7zM294.3 400c5.3 17 6.5 35.2 3.6 53l-5.9 35.7c-2 12.2 7.4 23.4 19.8 23.4 5.3 0 10.4-2.1 14.2-5.9l78.2-78.2c8.5-8.5 15.8-17.8 21.9-27.9l-131.8 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tornado
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tornado (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tornado {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tornado {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tornado 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tornado 3s ease-in-out infinite alternate;
}
</style>