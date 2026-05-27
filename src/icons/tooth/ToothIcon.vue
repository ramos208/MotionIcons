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
      <path d="M145 5.7L224 32 303 5.7C314.3 1.9 326 0 337.9 0 398.7 0 448 49.3 448 110.1l0 68.5c0 29.4-9.5 58.1-27.2 81.6l-1.1 1.5c-12.9 17.2-21.3 37.4-24.3 58.7L373.7 471.9c-3.3 23-23 40.1-46.2 40.1-22.8 0-42.3-16.5-46-39L261.3 351.6c-3-18.2-18.8-31.6-37.3-31.6s-34.2 13.4-37.3 31.6L166.5 473c-3.8 22.5-23.2 39-46 39-23.2 0-42.9-17.1-46.2-40.1L52.6 320.5c-3-21.3-11.4-41.5-24.3-58.7l-1.1-1.5C9.5 236.7 0 208.1 0 178.7l0-68.5C0 49.3 49.3 0 110.1 0 122 0 133.7 1.9 145 5.7z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tooth
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tooth (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tooth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tooth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tooth 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tooth 3s ease-in-out infinite alternate;
}
</style>