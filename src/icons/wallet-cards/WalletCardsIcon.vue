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
      <path d="M12 14C10.687 14 9.57106 13.1565 9.16437 11.9819C8.98368 11.46 8.55228 11 8 11C5.64298 11 4.46447 11 3.73223 11.7322C3 12.4645 3 13.643 3 16C3 18.357 3 19.5355 3.73223 20.2678C4.46447 21 5.64298 21 8 21H16C18.357 21 19.5355 21 20.2678 20.2678C21 19.5355 21 18.357 21 16C21 13.643 21 12.4645 20.2678 11.7322C19.5355 11 18.357 11 16 11C15.4477 11 15.0163 11.46 14.8356 11.9819C14.4289 13.1565 13.313 14 12 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 17V12C21 9.64298 21 8.46447 20.2678 7.73223C19.5355 7 18.357 7 16 7H8C5.64298 7 4.46447 7 3.73223 7.73223C3 8.46447 3 9.64298 3 12V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 13V8C21 5.64298 21 4.46447 20.2678 3.73223C19.5355 3 18.357 3 16 3H8C5.64298 3 4.46447 3 3.73223 3.73223C3 4.46447 3 5.64298 3 8V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wallet-cards
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wallet-cards (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wallet-cards {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wallet-cards {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wallet-cards 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wallet-cards 3s ease-in-out infinite alternate;
}
</style>