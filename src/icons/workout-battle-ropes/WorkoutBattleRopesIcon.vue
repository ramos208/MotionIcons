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
      <path d="M8.99488 4.49805C8.99488 5.32648 8.32291 5.99805 7.49401 5.99805C6.66509 5.99805 5.99313 5.32648 5.99313 4.49805C5.99313 3.66962 6.66509 2.99805 7.49401 2.99805C8.32291 2.99805 8.99488 3.66962 8.99488 4.49805Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.0009 8.99805C19.4171 8.99805 18.8673 8.7275 18.517 8.26779L17.4896 6.91965C17.3534 6.74102 17.2853 6.65171 17.2191 6.58149C16.6494 5.97771 15.7394 5.8243 14.998 6.20706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.002 16.998C19.7158 16.998 18.4912 16.4454 17.6367 15.4796L16.9581 14.7125C15.9763 13.6027 14.6698 12.8554 13.2453 12.5639M10.8691 12.427C10.559 12.427 10.404 12.427 10.2603 12.4061C9.02013 12.2263 8.31461 10.808 7.49411 9.99805" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.9991 6.97656L9.9047 8.38788L7.84413 8.25801M6.35904 21.0038V16.3656L6.17341 16.0317L5.18953 15.1226M5.18953 15.1226L3.37617 13.6789C3.13786 13.4891 2.99902 13.2011 2.99902 12.8965V12.8777L4.61406 8.57341L4.69037 8.46941C4.89663 8.18832 5.23439 8.03494 5.58178 8.06463L7.84413 8.25801M5.18953 15.1226L7.84413 8.25801" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workout-battle-ropes
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workout-battle-ropes (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workout-battle-ropes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workout-battle-ropes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workout-battle-ropes 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workout-battle-ropes 3s ease-in-out infinite alternate;
}
</style>