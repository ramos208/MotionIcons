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
      <path d="M336 96l48 64-128 0 0-64 80 0zm128 64L387.2 57.6C375.1 41.5 356.1 32 336 32L224 32c-17.7 0-32 14.3-32 32l0 96-144 0c-26.5 0-48 21.5-48 48l0 64c0 18.1 10.1 33.9 24.9 42.1-.5 5.7 1.1 11.6 4.7 16.4-3.7 6.9-6.8 14.1-9 21.8-11.6 1.7-20.6 11.7-20.6 23.8l0 16c0 12.1 8.9 22.1 20.6 23.8 2.2 7.6 5.3 14.9 9 21.8-7 9.4-6.3 22.8 2.3 31.3l11.3 11.3c8.6 8.6 21.9 9.3 31.3 2.2 6.8 3.7 14.1 6.8 21.7 9 1.7 11.6 11.7 20.6 23.8 20.6l16 0c12.1 0 22.1-8.9 23.8-20.6 7.6-2.2 14.9-5.3 21.7-9 9.4 7 22.8 6.3 31.3-2.2l11.3-11.3c8.6-8.6 9.3-21.9 2.3-31.3 3.7-6.8 6.8-14.1 9-21.7 11.6-1.7 20.6-11.7 20.6-23.8l0-16c0-12.1-8.9-22.1-20.6-23.8-2.2-7.6-5.3-14.9-9-21.7 2.4-3.2 3.9-6.8 4.5-10.5l114.2 0c.6 3.7 2.1 7.3 4.5 10.5-3.7 6.9-6.8 14.1-9 21.8-11.6 1.7-20.6 11.7-20.6 23.8l0 16c0 12.1 8.9 22.1 20.6 23.8 2.2 7.6 5.3 14.9 9 21.8-7 9.4-6.3 22.8 2.2 31.3l11.3 11.3c8.5 8.6 21.9 9.3 31.3 2.2 6.8 3.7 14.1 6.8 21.7 9 1.7 11.6 11.7 20.6 23.8 20.6l16 0c12.1 0 22.1-8.9 23.8-20.6 7.6-2.2 14.9-5.3 21.8-9 9.4 7 22.8 6.3 31.3-2.2l11.3-11.3c8.6-8.6 9.3-21.9 2.2-31.3 3.7-6.8 6.8-14.1 9-21.7 11.6-1.7 20.6-11.7 20.6-23.8l0-16c0-12.1-8.9-22.1-20.6-23.8-2.2-7.6-5.3-14.9-9-21.7 3.6-4.8 5.2-10.7 4.7-16.4 14.8-8.2 24.9-23.9 24.9-42.1l0-64c0-26.5-21.5-48-48-48l-64 0zM128 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: truck-monster
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for truck-monster (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-truck-monster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-truck-monster {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-truck-monster 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-truck-monster 3s ease-in-out infinite alternate;
}
</style>