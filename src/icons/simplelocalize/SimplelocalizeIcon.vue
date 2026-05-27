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
      <path d="M9.62 1.5q1.63 0 3.017.834a6.1 6.1 0 0 1 2.175 2.197 3.5 3.5 0 0 1 1.988-.606q1.5 0 2.55 1.06 1.05 1.062 1.05 2.577a4 4 0 0 1-.225 1.327q1.65.34 2.738 1.667Q24 11.882 24 13.625q0 1.326-.637 2.444a4.7 4.7 0 0 1-1.666 1.715c-1.966 1.409-6.07 3.414-11.223 4.683-1.866.459 3.785-3.98.853-3.98q-.15 0-.24-.011L5.4 18.475a5.17 5.17 0 0 1-2.7-.74 5.53 5.53 0 0 1-1.969-1.99A5.3 5.3 0 0 1 0 13.02q0-1.78 1.013-3.183T3.6 7.866v-.303a6 6 0 0 1 .806-3.032A6 6 0 0 1 6.6 2.315 5.86 5.86 0 0 1 9.62 1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: simplelocalize
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for simplelocalize (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-simplelocalize {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-simplelocalize {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-simplelocalize 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-simplelocalize 3s ease-in-out infinite alternate;
}
</style>