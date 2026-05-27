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
      <path d="M11.13 7.171c-.496.42 2.943-.458 2.6 1.239-.332 1.633-3.62-.343-7.223-.176-1.594.073-3.054.53-3.985 1.668.973-1.108 2.901-.844 2.398-.081-1.172 1.776-3.376.497-4.92 3.975.185-.4.685-1.196 2.843-1.526 1.586-.242 4.214-.016 5.054 1.297.924 1.444-3.759 1.28-1.167 1.573 3.593.406 6.299 3.31 9.813 3.311 4.55 0 7.422-2.324 7.457-6.146.063-6.923-9.101-8.318-12.87-5.134zm6.768 7.554c-1.195-.033-2.404-.512-3.364-.98-2.365-1.155-3.338-1.553-3.338-1.608 0-.067 1.42.484 3.813-.789 1.383-.735 1.432-1.377 2.89-1.505 1.73-.152 2.962 1.13 2.962 2.478 0 1.349-1.222 2.453-2.963 2.404z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mediafire
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mediafire (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mediafire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mediafire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mediafire 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mediafire 3s ease-in-out infinite alternate;
}
</style>