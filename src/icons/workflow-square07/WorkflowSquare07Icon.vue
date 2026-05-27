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
      <path d="M3 5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2C7.41421 2 8.12132 2 8.56066 2.43934C9 2.87868 9 3.58579 9 5C9 6.41421 9 7.12132 8.56066 7.56066C8.12132 8 7.41421 8 6 8C4.58579 8 3.87868 8 3.43934 7.56066C3 7.12132 3 6.41421 3 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 19C3 17.5858 3 16.8787 3.43934 16.4393C3.87868 16 4.58579 16 6 16C7.41421 16 8.12132 16 8.56066 16.4393C9 16.8787 9 17.5858 9 19C9 20.4142 9 21.1213 8.56066 21.5607C8.12132 22 7.41421 22 6 22C4.58579 22 3.87868 22 3.43934 21.5607C3 21.1213 3 20.4142 3 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 7C15 5.58579 15 4.87868 15.4393 4.43934C15.8787 4 16.5858 4 18 4C19.4142 4 20.1213 4 20.5607 4.43934C21 4.87868 21 5.58579 21 7C21 8.41421 21 9.12132 20.5607 9.56066C20.1213 10 19.4142 10 18 10C16.5858 10 15.8787 10 15.4393 9.56066C15 9.12132 15 8.41421 15 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 16V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 10C18 11.6569 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workflow-square07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workflow-square07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workflow-square07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workflow-square07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workflow-square07 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workflow-square07 3s ease-in-out infinite alternate;
}
</style>