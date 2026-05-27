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
      <path d="M6.338 23.028c-.117-.56-.353-1.678-.382-1.678-4.977-2.975-4.388-8.128-2.739-11.073.353 3.71 6.92 6.273 3.092 10.808-.03.059.177.765.353 1.413.766-1.296 1.915-2.856 1.856-3.004C3.806 8.01 18.53 7.126 21.592 0c1.385 6.89-.706 17.55-12.544 20.26-.06.03-2.15 3.71-2.238 3.74 0-.059-.884-.03-.766-.324.059-.177.177-.412.294-.648zm-.147-2.768c1.502-1.737-.265-4.712-1.325-5.683 1.796 3.092 1.679 4.888 1.325 5.683z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: paperlessngx
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for paperlessngx (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-paperlessngx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-paperlessngx {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-paperlessngx 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-paperlessngx 3s ease-in-out infinite alternate;
}
</style>