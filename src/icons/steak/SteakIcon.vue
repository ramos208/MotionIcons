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
      <path d="M17 16C19.7614 16 22 13.7614 22 11C22 9.87418 21.6279 8.83526 21 7.99951C18.8745 5.17054 16 4 12 4C8 4 2 6.86508 2 10.5C2 11.8807 3.11929 13 4.5 13H8C9.32374 12.9675 12 13.5 14.2356 15.167C15.0274 15.6933 15.9779 16 17 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 10.5V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17C9.32374 16.9675 12 17.5 14.2356 19.167C15.0274 19.6933 15.9779 20 17 20C19.7614 20 22 17.7614 22 15V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: steak
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for steak (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-steak {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-steak {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-steak 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-steak 3s ease-in-out infinite alternate;
}
</style>