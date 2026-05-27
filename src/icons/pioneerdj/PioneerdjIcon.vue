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
      <path d="M15.46 5.569c1.474 1.144 1.715 2.695 1.107 4.319-.565 1.503-1.833 2.96-3.827 4.087-2.21 1.227-4.498 1.554-6.993 1.554H0L4.212 4.308h5.051c2.548 0 4.7.1 6.197 1.26zm-3.112 4.235c.33-.884.246-2.202-.34-2.906-.658-.782-1.673-.873-3.138-.873l-.716.016s-.616-.07-.866.49c-.153.35.064-.263-2.412 6.341-.326.876.452.919.452.919s2.794.17 5.132-1.448c.991-.685 1.577-1.705 1.888-2.539zm5.938-1.467L24 8.366l-2.892 7.731c-.944 2.518-2.896 3.595-6.812 3.595l-3.058-.04.731-1.746c4.427.21 5.225-1.76 5.365-2.139l1.846-4.966s.317-.884-.402-.884h-1.132Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pioneerdj
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pioneerdj (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pioneerdj {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pioneerdj {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pioneerdj 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pioneerdj 3s ease-in-out infinite alternate;
}
</style>