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
      <path d="M19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20M3.5 20C3.5 18.8954 4.39543 18 5.5 18H19.5V14M3.5 20V8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 18C19 18 18 18.7628 18 20C18 21.2372 19 22 19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 5.5V4C19 2.89543 18.1046 2 17 2C15.8954 2 15 2.89543 15 4V5.5M19 5.5H15M19 5.5C19.8284 5.5 20.5 6.17157 20.5 7V7.75C20.5 8.44891 20.5 8.79837 20.3858 9.07403C20.2336 9.44157 19.9416 9.73358 19.574 9.88582C19.2984 10 18.9489 10 18.25 10H15.75C15.0511 10 14.7016 10 14.426 9.88582C14.0584 9.73358 13.7664 9.44157 13.6142 9.07403C13.5 8.79837 13.5 8.44891 13.5 7.75V7C13.5 6.17157 14.1716 5.5 15 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: book-lock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for book-lock (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-book-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-book-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-book-lock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-book-lock 3s ease-in-out infinite alternate;
}
</style>