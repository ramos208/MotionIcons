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
      <path d="M416-32c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0-58.7 58.7-17.4-17.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l17.4 17.4-23 23c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l23-23 17.4 17.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L453.3 136 512 77.3 512 128c0 17.7 14.3 32 32 32s32-14.3 32-32L576 0c0-17.7-14.3-32-32-32L416-32zM128 304a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mars-stroke
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mars-stroke (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mars-stroke {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mars-stroke {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mars-stroke 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mars-stroke 3s ease-in-out infinite alternate;
}
</style>