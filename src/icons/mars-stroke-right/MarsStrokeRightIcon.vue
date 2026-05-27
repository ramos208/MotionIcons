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
      <path d="M320.5 256a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM208.5 80c86.3 0 158.1 62.1 173.1 144.1 1-.1 1.9-.1 2.9-.1l16 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 61.4 0-22.4-28c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l64 80c9.3 11.7 9.3 28.3 0 40l-64 80c-11 13.8-31.2 16-45 5s-16-31.2-5-45l22.4-28-61.4 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-16 0c-1 0-1.9 0-2.9-.1-15 82-86.8 144.1-173.1 144.1-97.2 0-176-78.8-176-176s78.8-176 176-176z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mars-stroke-right
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mars-stroke-right (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mars-stroke-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mars-stroke-right {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mars-stroke-right 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mars-stroke-right 3s ease-in-out infinite alternate;
}
</style>