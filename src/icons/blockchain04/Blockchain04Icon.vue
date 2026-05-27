<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 18H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 12L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 15L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: blockchain04
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for blockchain04 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-blockchain04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-blockchain04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-blockchain04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-blockchain04 2s ease-in-out infinite alternate;
}
</style>