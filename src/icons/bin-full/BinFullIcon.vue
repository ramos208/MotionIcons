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
      <path d="M19.2616 17.0378L20.9383 4.46293C20.9746 4.19069 20.8214 3.92855 20.5664 3.82655L16 2H10.5L9.81818 3.5L5 2L3.20966 3.79034C3.07751 3.92249 3.01449 4.10866 3.03919 4.2939L4.73838 17.0378C4.90325 18.2744 5.6356 19.3632 6.71873 19.9821L7.03861 20.1649C10.1129 21.9217 13.8871 21.9217 16.9614 20.1649L17.2813 19.9821C18.3644 19.3632 19.0968 18.2744 19.2616 17.0378Z" stroke="currentColor" stroke-width="1.5"/><path d="M16 2L14 7" stroke="currentColor" stroke-width="1.5"/><path d="M9 6.5L9.81818 3.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 5.00002C5.57143 7.66668 18.4286 7.66664 21 5.00002" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bin-full
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bin-full (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bin-full {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bin-full {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bin-full 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bin-full 3s ease-in-out infinite alternate;
}
</style>