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
      <path d="M8.5 15C5.68353 15 4.2753 15 3.31779 14.2364C3.11289 14.073 2.92699 13.8871 2.76359 13.6822C2 12.7247 2 11.3165 2 8.5C2 5.68353 2 4.2753 2.76359 3.31779C2.92699 3.11289 3.11289 2.92699 3.31779 2.76359C4.2753 2 5.68353 2 8.5 2C11.3165 2 12.7247 2 13.6822 2.76359C13.8871 2.92699 14.073 3.11289 14.2364 3.31779C15 4.2753 15 5.68353 15 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 15.5C9 12.6835 9 11.2753 9.76359 10.3178C9.92699 10.1129 10.1129 9.92699 10.3178 9.76359C11.2753 9 12.6835 9 15.5 9C18.3165 9 19.7247 9 20.6822 9.76359C20.8871 9.92699 21.073 10.1129 21.2364 10.3178C22 11.2753 22 12.6835 22 15.5C22 18.3165 22 19.7247 21.2364 20.6822C21.073 20.8871 20.8871 21.073 20.6822 21.2364C19.7247 22 18.3165 22 15.5 22C12.6835 22 11.2753 22 10.3178 21.2364C10.1129 21.073 9.92699 20.8871 9.76359 20.6822C9 19.7247 9 18.3165 9 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pathfinder-trim
// Category: search
// Physics Presets: Dynamic kinetic adaptation for pathfinder-trim (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pathfinder-trim {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pathfinder-trim {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pathfinder-trim 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pathfinder-trim 3s ease-in-out infinite alternate;
}
</style>