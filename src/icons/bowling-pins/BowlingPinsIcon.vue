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
      <path d="M12.5 10.544C13.2611 10.1947 14.1078 10 15 10C18.3137 10 21 12.6863 21 16C21 19.3137 18.3137 22 15 22C14.4821 22 13.9794 21.9344 13.5 21.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.991 15H18M15 15H15.009M16.4955 13L16.5045 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.88423 6.56062L5.45498 4.45142C5.19688 3.18322 6.18394 2 7.5 2C8.81606 2 9.80312 3.18322 9.54502 4.45142L9.11577 6.56062C8.47015 9.73293 10.2277 11.6357 11.4499 14.2704C11.9824 15.4182 12.1332 16.7017 11.8809 17.9385C11.6648 18.998 11.3245 20.6686 10.6053 21.4829C10.1239 22.0281 9.44033 21.9997 8.76023 21.9997H6.23977C5.55967 21.9997 4.87609 22.0281 4.39466 21.4829C3.67546 20.6686 3.33521 18.998 3.11909 17.9385C2.86681 16.7017 3.01761 15.4182 3.55006 14.2704C4.77234 11.6357 6.52985 9.73293 5.88423 6.56062Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 9H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bowling-pins
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bowling-pins (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bowling-pins {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bowling-pins {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bowling-pins 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bowling-pins 3s ease-in-out infinite alternate;
}
</style>