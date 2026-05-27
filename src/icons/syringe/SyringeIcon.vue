<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <path d="M497.5-17c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15-46.1 46.1-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l7 7-78.1 78.1 41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41-41-46.1 46.1 41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41-41-37.7 37.7c-10.5 10.5-16.4 24.7-16.4 39.6l0 88.8-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 88.8 0c14.9 0 29.1-5.9 39.6-16.4l229.7-229.7 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63 46.1-46.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: syringe
// Category: notification
// Physics Presets: Dynamic kinetic adaptation for syringe (fontawesome). Selected semantic motion: pendulum with custom idle (subtle-drift) and interaction profile (bell-ring) matched to SVG complexity (complex) and flow geometry.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-syringe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(-18deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(15deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-syringe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(6deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-syringe 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-syringe 2.5s ease-in-out infinite alternate;
}
</style>