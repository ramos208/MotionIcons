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
      <path d="M15 18C15 16.5858 15 15.8787 15.4393 15.4393C15.8787 15 16.5858 15 18 15C19.4142 15 20.1213 15 20.5607 15.4393C21 15.8787 21 16.5858 21 18C21 19.4142 21 20.1213 20.5607 20.5607C20.1213 21 19.4142 21 18 21C16.5858 21 15.8787 21 15.4393 20.5607C15 20.1213 15 19.4142 15 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C7.41421 6 8.12132 6 8.56066 6.43934C9 6.87868 9 7.58579 9 9C9 10.4142 9 11.1213 8.56066 11.5607C8.12132 12 7.41421 12 6 12C4.58579 12 3.87868 12 3.43934 11.5607C3 11.1213 3 10.4142 3 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9 9H12C14.8284 9 16.2426 9 17.1213 9.87868C18 10.7574 18 12.1716 18 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 12V22M6 6V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workflow-square04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workflow-square04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workflow-square04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workflow-square04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workflow-square04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workflow-square04 3s ease-in-out infinite alternate;
}
</style>