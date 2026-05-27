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
      <path d="M6.74 6.772a7.436 7.436 0 0 1 10.519 0 7.432 7.432 0 0 1 0 10.515 7.436 7.436 0 0 1-10.52 0c-2.904-2.905-2.904-7.64 0-10.515M12 20.337c-4.59 0-8.338-3.747-8.338-8.337s3.748-8.308 8.338-8.308c4.591 0 8.31 3.748 8.31 8.308 0 4.619-3.719 8.337-8.31 8.337zm12-8.366L21.27 9.5l1.103-3.514-3.603-.784-.784-3.602-3.515 1.133L11.97.004l-2.47 2.73L5.986 1.63 5.2 5.231l-3.602.785 1.133 3.515L0 12.03l2.732 2.47-1.105 3.514 3.603.784.784 3.603 3.516-1.134 2.5 2.731 2.468-2.73 3.516 1.103.785-3.602 3.603-.813-1.134-3.515L24 11.97z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: accuweather
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for accuweather (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-accuweather {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-accuweather {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-accuweather 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-accuweather 3s ease-in-out infinite alternate;
}
</style>