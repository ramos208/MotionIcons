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
      <path d="M11.5001 2.5L12.5001 2.50001C16.7427 2.50006 18.864 2.50008 20.182 3.8181C21.5 5.13611 21.5 7.25741 21.5 11.5V12.5001C21.5 16.7427 21.5 18.8641 20.182 20.1821C18.864 21.5001 16.7426 21.5001 12.5 21.5001H11.5C7.25736 21.5001 5.13604 21.5001 3.81802 20.1821C2.5 18.8641 2.5 16.7427 2.5 12.5001V11.5C2.5 7.25732 2.5 5.13598 3.81804 3.81795C5.13607 2.49993 7.25741 2.49995 11.5001 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9999 7.39502C13.9329 7.39502 15.4999 8.96202 15.4999 10.895C15.4999 12.828 13.9329 14.395 11.9999 14.395C10.0669 14.395 8.49988 12.828 8.49988 10.895C8.49988 8.96202 10.0669 7.39502 11.9999 7.39502Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.9823 20.895C18.7259 17.2624 15.6978 14.395 11.9999 14.395C8.302 14.395 5.27383 17.2624 5.01746 20.895" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-square
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-square (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-square 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-square 3s ease-in-out infinite alternate;
}
</style>