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
      <path d="M11 13H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 9V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C14.6972 7.44619 14.6438 8.86174 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.35625 8.86174 9.30278 7.44619 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.20631 21.347 6.891 20.067 8.16417 17.8583C9.01333 16.3851 9.39787 16 11.1039 16H12.8961C14.6021 16 14.9867 16.3851 15.8358 17.8583C17.109 20.067 18.7937 21.347 20.1526 20.9174Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: game-controller01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for game-controller01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-game-controller01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-game-controller01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-game-controller01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-game-controller01 3s ease-in-out infinite alternate;
}
</style>