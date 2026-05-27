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
      <path d="M17.6664 9.16667C19.4373 7.39583 20.4998 3.5 20.4998 3.5C20.4998 3.5 16.6039 4.5625 14.8331 6.33333M17.6664 9.16667L14.8331 6.33333M17.6664 9.16667L16.2498 11.2917M14.8331 6.33333L12.7081 7.75M16.2498 11.2917L12.7081 7.75M16.2498 11.2917L9.87476 17.6667C9.28795 18.2535 8.33656 18.2535 7.74976 17.6667M12.7081 7.75L6.33309 14.125C5.74629 14.7118 5.74629 15.6632 6.33309 16.25M7.74976 17.6667L6.33309 16.25M7.74976 17.6667C8.33656 18.2535 8.33656 19.2049 7.74976 19.7917L7.04142 20.5L3.49976 16.9583L4.20809 16.25C4.79489 15.6632 5.74629 15.6632 6.33309 16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bullet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bullet (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bullet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bullet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bullet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bullet 3s ease-in-out infinite alternate;
}
</style>