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
      <path d="M1.166.521C.506.521 0 1.055 0 1.715v1.97c0 2.316 1.054 3.473 3.502 3.473h5.43c1.623 0 1.783.685 1.783 1.35 0 .068.004.13.012.193a1.268 1.268 0 0 0 2.531-.004c.007-.062.012-.121.012-.19 0-.664.16-1.349 1.783-1.349h5.43C22.93 7.158 24 6.001 24 3.686V1.715c0-.66-.524-1.194-1.184-1.194-.66 0-1.189.534-1.189 1.194l-.004.685c0 .746-.476 1.27-1.594 1.27h-5.322c-2.422 0-2.608 1.796-2.687 2.748h-.055c-.08-.952-.266-2.748-2.688-2.748H3.955c-1.118 0-1.629-.544-1.629-1.29v-.665c0-.66-.5-1.194-1.16-1.194zm5.875 10.553a1.586 1.586 0 0 0-1.375 2.371c1.657 3.06 3.308 6.13 4.967 9.184a1.415 1.415 0 0 0 2.586.02l.033-.06 4.945-9.142a1.587 1.587 0 0 0-1.377-2.373c-.702 0-1.179.345-1.502 1.082l-3.386 6.313-3.383-6.305c-.326-.745-.805-1.09-1.508-1.09Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vaadin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vaadin (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vaadin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vaadin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vaadin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vaadin 3s ease-in-out infinite alternate;
}
</style>