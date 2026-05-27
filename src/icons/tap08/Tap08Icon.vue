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
      <path d="M7.78057 13.9568V9.49317M7.78057 9.49317V3.97805C7.78057 3.15846 8.46365 2.49792 9.28334 2.49792C10.103 2.49792 10.7489 3.15846 10.7489 3.97805V7.974M7.78057 9.49317C6.46629 10.684 5.05198 12.1884 4.86153 12.5737C3.97535 13.9225 4.06824 14.5755 5.05582 16.2259C5.89463 17.6277 7.02271 19.1833 7.08856 19.2579C7.7588 20.0174 7.62553 20.0175 8.59699 20.7307C9.46447 21.3327 11.2638 21.7522 15.4822 21.3327C18.9186 20.8019 19.7419 17.8026 19.7241 16.3692V12.8295C19.9381 9.88749 18.7083 9.75469 16.4751 9.46512M10.7489 7.974V10.4976M10.7489 7.974C11.3062 7.06532 13.3302 7.43254 13.7247 9.14847M13.7603 10.4936V9.49317C13.7603 9.4143 13.7564 9.33519 13.7453 9.25717M13.7247 9.14847C13.7263 9.15569 13.728 9.16293 13.7296 9.1702C13.7359 9.19899 13.7411 9.228 13.7453 9.25717M13.7247 9.14847C13.7288 9.18343 13.7356 9.21967 13.7453 9.25717M13.7247 9.14847C13.5846 7.95246 16.6156 8.24402 16.7389 10.3474V11.4905" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap08
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap08 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap08 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap08 3s ease-in-out infinite alternate;
}
</style>