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
      <path d="M11.5 6.9668H9.5C7.567 6.9668 6 8.30994 6 9.9668C6 11.6237 7.567 12.9668 9.5 12.9668H12.5C14.433 12.9668 16 14.3099 16 15.9668C16 17.6237 14.433 18.9668 12.5 18.9668H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.25 2.0332C16.1789 2.0332 14.5 3.66124 14.5 5.66952C14.5 6.81786 14.9688 7.71074 15.9062 8.50829C16.5671 9.07045 17.7694 10.2763 18.25 11.0332C18.755 10.2914 19.9329 9.07045 20.5938 8.50829C21.5312 7.71074 22 6.81786 22 5.66952C22 3.66124 20.3211 2.0332 18.25 2.0332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.3848 5.5332H18.2598M18.5098 5.5332C18.5098 5.67127 18.3978 5.7832 18.2598 5.7832C18.1217 5.7832 18.0098 5.67127 18.0098 5.5332C18.0098 5.39513 18.1217 5.2832 18.2598 5.2832C18.3978 5.2832 18.5098 5.39513 18.5098 5.5332Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: route03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for route03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-route03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-route03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-route03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-route03 3s ease-in-out infinite alternate;
}
</style>