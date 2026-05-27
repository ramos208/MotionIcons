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
      <path d="M12,0C5.371,0,0,5.371,0,12s5.371,12,12,12s12-5.371,12-12C24.011,5.371,18.629,0,12,0z M12.7,22.611 C6.837,22.611,2.089,17.863,2.089,12S6.837,1.389,12.7,1.389S23.311,6.137,23.311,12S18.563,22.611,12.7,22.611z M7.045,3.413 c-4.747,2.735-6.366,8.795-3.632,13.542c2.735,4.737,8.806,6.366,13.542,3.632c4.747-2.735,6.366-8.806,3.632-13.542 C17.852,2.297,11.792,0.678,7.045,3.413z M16.868,19.034c-4.08,2.352-9.287,0.952-11.639-3.118 c-2.352-4.08-0.952-9.287,3.118-11.639c4.08-2.352,9.287-0.952,11.639,3.118C22.337,11.464,20.948,16.682,16.868,19.034z M5.229,8.084c-2.166,3.741-0.875,8.532,2.866,10.687c3.741,2.166,8.532,0.875,10.698-2.866s0.875-8.532-2.866-10.687 C12.175,3.063,7.384,4.343,5.229,8.084z M18.071,14.702c-1.827,3.161-5.863,4.244-9.025,2.417 c-3.161-1.827-4.244-5.863-2.418-9.025s5.863-4.244,9.025-2.418C18.815,7.493,19.898,11.541,18.071,14.702z M6.093,12 c0,3.271,2.647,5.918,5.918,5.918s5.918-2.647,5.918-5.918s-2.647-5.918-5.918-5.918C8.74,6.082,6.093,8.729,6.093,12z M16.704,11.3c0,2.593-2.1,4.693-4.693,4.693s-4.693-2.1-4.693-4.693s2.1-4.693,4.693-4.693C14.593,6.607,16.704,8.707,16.704,11.3 z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: loop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for loop (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-loop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-loop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-loop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-loop 3s ease-in-out infinite alternate;
}
</style>