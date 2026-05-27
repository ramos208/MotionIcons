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
      <path d="M8.5 14.5L5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 6C8 6 9 4.9387 9 4C9 2.66667 8 2 8 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6C12 6 13 4.9387 13 4C13 2.66667 12 2 12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6C16 6 17 4.9387 17 4C17 2.66667 16 2 16 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 17.5L7.5 17.5" stroke="currentColor" stroke-linejoin="round"/><path d="M15.5 14.5L17.6 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 22C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19C17.6716 19 17 19.6716 17 20.5C17 21.3284 17.6716 22 18.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C15.664 15 18.6705 12.185 18.9747 8.59974C19.0027 8.26956 18.7314 8 18.4 8H5.6C5.26863 8 4.99732 8.26956 5.02533 8.59974C5.32955 12.185 8.33603 15 12 15Z" stroke="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bbq
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bbq (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bbq {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bbq {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bbq 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bbq 3s ease-in-out infinite alternate;
}
</style>