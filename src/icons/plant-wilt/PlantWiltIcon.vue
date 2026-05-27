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
      <path d="M344-32c66.3 0 120 53.7 120 120l0 6.2c29.3 12.2 48 41.3 48 76.9 0 27.9-25.3 74.8-66 111.7-3.8 3.5-8.8 5.3-14 5.3s-10.2-1.8-14-5.3c-40.7-36.8-66-83.7-66-111.7 0-35.6 18.7-64.7 48-76.9l0-6.2c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 424c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-296c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 38.2c29.3 12.2 48 41.3 48 76.9 0 27.9-25.3 74.8-66 111.7-3.8 3.5-8.8 5.3-14 5.3s-10.2-1.8-14-5.3C25.3 405.9 0 359 0 331.1 0 295.4 18.7 266.4 48 254.2L48 216c0-66.3 53.7-120 120-120 20.2 0 39.3 5 56 13.8L224 88c0-66.3 53.7-120 120-120z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plant-wilt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plant-wilt (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plant-wilt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plant-wilt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plant-wilt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plant-wilt 3s ease-in-out infinite alternate;
}
</style>