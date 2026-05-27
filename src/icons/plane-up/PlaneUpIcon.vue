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
      <path d="M200 24c0-30.9 25.1-56 56-56s56 25.1 56 56l0 127.3 173.6 159.2c6.6 6.1 10.4 14.6 10.4 23.6l0 43.7c0 10.9-10.7 18.6-21.1 15.2l-162.9-54.3 0 99.7 66 52.8c3.8 3 6 7.6 6 12.5l0 19.8c0 10.4-9.8 18-19.9 15.5L256 512 147.9 539c-10.1 2.5-19.9-5.1-19.9-15.5l0-19.8c0-4.9 2.2-9.5 6-12.5l66-52.8 0-99.7-162.9 54.3C26.7 396.4 16 388.7 16 377.8l0-43.7c0-9 3.8-17.5 10.4-23.6L200 151.3 200 24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plane-up
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plane-up (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plane-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-plane-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plane-up 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plane-up 3s ease-in-out infinite alternate;
}
</style>