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
      <path d="M8.26301 22.0012V21.1373C8.26301 20.6731 8.24974 20.1921 8.02536 19.7857C7.78125 19.3436 7.395 18.9721 6.88754 18.32C6.53526 17.8673 6.18154 17.414 5.83288 16.9585C5.35602 16.3355 4.84793 15.5595 4.5353 14.8912C4.19172 14.1567 4.13025 13.2691 4.52035 12.5582C4.70599 12.2198 5.01001 11.7854 5.50505 11.2165L7.74284 8.90318M7.74284 13.4416V8.90318M7.74284 8.90318L7.70416 5.20031C7.70416 4.23661 8.39323 3.45537 9.24324 3.45537C10.0932 3.45537 10.7086 4.08236 10.7086 5.04606L10.8094 9.99929L10.7086 3.74494C10.7086 2.78124 11.3976 2 12.2476 2C13.0976 2 13.7867 2.78124 13.7867 3.74494L13.748 7.44781L13.7603 11.0026V9.99929C13.7603 9.93755 13.7579 9.87566 13.7516 9.81426M13.7516 9.81426C13.7498 9.797 13.7477 9.77978 13.7452 9.76261M13.7516 9.81426C13.7579 9.84311 13.741 9.73336 13.7452 9.76261M13.7452 9.76261C13.7452 8.56901 15.8002 8.76815 16.5119 10.0177M16.7495 12.0024V10.856C16.7366 10.5391 16.6492 10.2588 16.5119 10.0177M16.5119 10.0177C18.9508 10.0641 19.5856 10.856 19.7478 12.0828V15.3298C19.7448 17.0565 19.4567 18.3086 18.4306 19.3384C17.4826 20.4707 17.7056 21.1045 17.682 22.0012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: two-finger02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for two-finger02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-two-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-two-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-two-finger02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-two-finger02 3s ease-in-out infinite alternate;
}
</style>