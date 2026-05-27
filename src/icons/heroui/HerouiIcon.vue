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
      <path d="M6.353 0h11.294A6.353 6.353 0 0 1 24 6.353v11.294A6.353 6.353 0 0 1 17.647 24H6.353A6.353 6.353 0 0 1 0 17.647V6.353A6.353 6.353 0 0 1 6.353 0Zm7.755 6.913h-.933v6.702a2.88 2.88 0 0 1-.362 1.45c-.24.424-.596.77-1.025 1-.443.244-.96.365-1.553.365-.592 0-1.108-.121-1.55-.364a2.603 2.603 0 0 1-1.024-1 2.865 2.865 0 0 1-.365-1.45V6.912h-.933v6.767a3.558 3.558 0 0 0 .489 1.862c.327.547.798.994 1.362 1.292.582.316 1.256.474 2.021.474.769 0 1.444-.157 2.024-.471a3.473 3.473 0 0 0 1.36-1.293c.33-.565.5-1.21.49-1.864V6.913Zm3.648 10.22V6.914h-.933v10.22h.933Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: heroui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for heroui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-heroui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-heroui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-heroui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-heroui 3s ease-in-out infinite alternate;
}
</style>