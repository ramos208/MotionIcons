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
      <path d="M16.5 21V15.5C16.5 15.0353 16.5 14.803 16.4616 14.6098C16.3038 13.8164 15.6836 13.1962 14.8902 13.0384C14.697 13 14 13 14 13C13.5 17.9993 9.5 19 9.5 19C9.5 19 5.5 18 5 13C5 13 4.30302 13 4.10982 13.0384C3.31644 13.1962 2.69624 13.8164 2.53843 14.6098C2.5 14.803 2.5 15.0353 2.5 15.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 13.4998L11.5 12.4998V14.4998L9.5 13.4998ZM9.5 13.4998L7.5 12.5V14.5L9.5 13.4998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.5 6.9375V6.0625C12.5 4.37113 11.1569 3 9.5 3C7.84315 3 6.5 4.37113 6.5 6.0625V6.9375C6.5 8.62887 7.84315 10 9.5 10C11.1569 10 12.5 8.62887 12.5 6.9375Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.5 21V15.5C21.5 15.0353 21.5 14.803 21.4616 14.6098C21.3038 13.8164 20.6836 13.1962 19.8902 13.0384C19.697 13 19.4647 13 19 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 3.17426C14.8128 3.06141 15.1494 3 15.5 3C17.1569 3 18.5 4.37113 18.5 6.0625V6.9375C18.5 8.62887 17.1569 10 15.5 10C15.1494 10 14.8128 9.93859 14.5 9.82574" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: waiters
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for waiters (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-waiters {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-waiters {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-waiters 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-waiters 2s ease-in-out infinite alternate;
}
</style>