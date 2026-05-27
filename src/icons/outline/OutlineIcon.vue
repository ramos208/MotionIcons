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
      <path d="M 15.081 21.857 L 15.081 22.459 C 15.081 23.636 13.812 24.378 12.785 23.8 L 3.543 18.602 C 3.058 18.329 2.758 17.816 2.758 17.26 L 2.758 6.742 C 2.758 6.185 3.058 5.672 3.543 5.399 L 12.785 0.201 C 13.812 -0.378 15.082 0.365 15.081 1.544 L 15.081 2.145 L 16.178 1.814 C 17.167 1.517 18.163 2.258 18.162 3.29 L 18.162 3.915 L 19.511 3.746 C 20.431 3.632 21.243 4.348 21.242 5.275 L 21.242 18.726 C 21.243 19.652 20.431 20.37 19.511 20.254 L 18.162 20.085 L 18.162 20.71 C 18.163 21.743 17.167 22.484 16.178 22.186 L 15.081 21.857 Z M 15.081 20.249 L 16.621 20.71 L 16.621 3.29 L 15.081 3.753 L 15.081 20.249 Z M 18.162 5.467 L 18.162 18.534 L 19.702 18.726 L 19.702 5.275 L 18.162 5.467 Z M 2.758 16.801 L 2.758 7.2 L 2.758 16.801 Z M 4.298 6.742 L 4.298 17.26 L 13.54 22.459 L 13.54 1.544 L 4.298 6.742 Z M 5.838 7.765 L 7.379 6.995 L 7.379 17.005 L 5.838 16.235 L 5.838 7.765 Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: outline
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for outline (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-outline {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-outline {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-outline 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-outline 3s ease-in-out infinite alternate;
}
</style>