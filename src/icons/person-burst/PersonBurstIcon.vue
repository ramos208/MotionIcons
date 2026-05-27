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
      <path d="M204 40.1c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24l0 48c0 13.3-10.7 24-24 24zM4 144.1c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM96.5 285.5c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L96.5 285.5zM62.6 2.7c9.4-9.4 24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L62.6 36.6c-9.4-9.4-9.4-24.6 0-33.9zM352.4-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM478.7 299.1l-46.3-62.4 0 275.3c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-275.3-46.3 62.4c-10.5 14.2-30.6 17.2-44.8 6.6s-17.2-30.6-6.6-44.8l70.5-95c25.2-33.9 65-53.9 107.2-53.9s82 20 107.2 53.9l70.5 95c10.5 14.2 7.6 34.2-6.6 44.8s-34.2 7.6-44.8-6.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: person-burst
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for person-burst (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-person-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-person-burst {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-person-burst 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-person-burst 3s ease-in-out infinite alternate;
}
</style>