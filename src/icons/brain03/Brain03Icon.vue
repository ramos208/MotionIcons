<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12 19V5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 5.55228 5.55228 6 5 6C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12C3.34315 12 2 13.3431 2 15C2 16.6569 3.34315 18 5 18C5.55228 18 6 18.4477 6 19C6 20.6569 7.34315 22 9 22C10.6569 22 12 20.6569 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 19V5C12 3.34315 13.3431 2 15 2C16.6569 2 18 3.34315 18 5C18 5.55228 18.4477 6 19 6C20.6569 6 22 7.34315 22 9C22 10.6569 20.6569 12 19 12C20.6569 12 22 13.3431 22 15C22 16.6569 20.6569 18 19 18C18.4477 18 18 18.4477 18 19C18 20.6569 16.6569 22 15 22C13.3431 22 12 20.6569 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brain03
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for brain03 (hugeicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brain03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brain03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brain03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brain03 3s ease-in-out infinite alternate;
}
</style>