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
      <path d="M12 22V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.59238 7.43436C9.56387 7.79137 10.7369 8 12 8C13.2631 8 14.4361 7.79137 15.4076 7.43436C16.0441 7.20048 16.1801 6.43408 15.7553 5.91561L12.8887 2.41707C12.4331 1.86098 11.5669 1.86098 11.1113 2.41707L8.24472 5.91561C7.81991 6.43408 7.95593 7.20048 8.59238 7.43436Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.7898 7.62305L17.2408 10.4446C17.674 10.9434 17.5554 11.7064 16.9511 11.9898C15.6018 12.6226 14.0495 12.9999 12 12.9999C9.95052 12.9999 8.39815 12.6226 7.04891 11.9898C6.44464 11.7064 6.326 10.9434 6.75921 10.4446L9.21022 7.62305" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.64436 12.3418L5.26271 15.0154C4.84523 15.484 4.92927 16.2074 5.4867 16.504C7.23841 17.4362 9.51345 17.9992 12 17.9992C14.4866 17.9992 16.7616 17.4362 18.5133 16.504C19.0707 16.2074 19.1548 15.484 18.7373 15.0154L16.3556 12.3418" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tree07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tree07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tree07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tree07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tree07 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tree07 3s ease-in-out infinite alternate;
}
</style>