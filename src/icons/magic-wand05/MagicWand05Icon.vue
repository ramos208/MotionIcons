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
      <path d="M16.6917 9.80279L18.4834 8.01108C19.1722 7.32225 19.1722 6.20545 18.4834 5.51662C17.7946 4.82779 16.6777 4.82779 15.9889 5.51662L14.1972 7.30833M16.6917 9.80279L6.01108 20.4834C5.32225 21.1722 4.20545 21.1722 3.51662 20.4834C2.82779 19.7946 2.82779 18.6777 3.51662 17.9889L14.1972 7.30833M16.6917 9.80279L14.1972 7.30833" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.9737 14.0215C17.9795 13.9928 18.0205 13.9928 18.0263 14.0215C18.3302 15.5081 19.4919 16.6698 20.9785 16.9737C21.0072 16.9795 21.0072 17.0205 20.9785 17.0263C19.4919 17.3302 18.3302 18.4919 18.0263 19.9785C18.0205 20.0072 17.9795 20.0072 17.9737 19.9785C17.6698 18.4919 16.5081 17.3302 15.0215 17.0263C14.9928 17.0205 14.9928 16.9795 15.0215 16.9737C16.5081 16.6698 17.6698 15.5081 17.9737 14.0215Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.12063 3.30967C8.20503 2.89678 8.79497 2.89678 8.87937 3.30967C9.06576 4.22159 9.77841 4.93424 10.6903 5.12063C11.1032 5.20503 11.1032 5.79497 10.6903 5.87937C9.77841 6.06576 9.06576 6.77841 8.87937 7.69033C8.79497 8.10322 8.20503 8.10322 8.12063 7.69033C7.93424 6.77841 7.22159 6.06576 6.30967 5.87937C5.89678 5.79497 5.89678 5.20503 6.30967 5.12063C7.22159 4.93424 7.93424 4.22159 8.12063 3.30967Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: magic-wand05
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for magic-wand05 (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-magic-wand05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-magic-wand05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-magic-wand05 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-magic-wand05 2s ease-in-out infinite alternate;
}
</style>