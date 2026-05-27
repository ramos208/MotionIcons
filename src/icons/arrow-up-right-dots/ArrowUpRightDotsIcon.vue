<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M96 32C78.3 32 64 46.3 64 64S78.3 96 96 96L114.7 96 9.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.3 160 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 32zM403.8 70.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM279.7 194.2a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm162.2-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zM156.2 317.8a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM70.1 403.8a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-right-dots
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for arrow-up-right-dots (fontawesome). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrow-up-right-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-right-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-right-dots 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrow-up-right-dots 3s ease-in-out infinite alternate;
}
</style>