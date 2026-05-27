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
      <path d="M14 3C14.9108 5.05228 15.5 8.31975 15.5 12C15.5 15.6803 14.9108 18.9477 14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 3C9.08916 5.05228 8.5 8.31975 8.5 12C8.5 15.6803 9.08916 18.9477 10 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 12C21 9.64032 20.5156 7.45033 19.6878 5.64155C19.2204 4.62031 18.9867 4.10969 18.1226 3.55485C17.2584 3 16.4568 3 14.8536 3H9.14641C7.54318 3 6.74156 3 5.87743 3.55485C5.01331 4.10969 4.77962 4.62031 4.31223 5.64155C3.48442 7.45033 3 9.64032 3 12C3 14.3597 3.48442 16.5497 4.31223 18.3585C4.77962 19.3797 5.01331 19.8903 5.87743 20.4452C6.74156 21 7.54318 21 9.14641 21H14.8536C16.4568 21 17.2584 21 18.1226 20.4452C18.9867 19.8903 19.2204 19.3797 19.6878 18.3585C20.5156 16.5497 21 14.3597 21 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 7H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 17H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: barrel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for barrel (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-barrel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-barrel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-barrel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-barrel 3s ease-in-out infinite alternate;
}
</style>