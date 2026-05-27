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
      <path d="M144 48c0-26.5 21.5-48 48-48s48 21.5 48 48l0 320c0 32.5 12.1 62.1 32 84.7l0 27.3c0 7.1 .9 14.1 2.7 20.7L192 480 83.9 507C73.8 509.6 64 501.9 64 491.5l0-19.8c0-4.9 2.2-9.5 6-12.5l74-59.2 0-57.6-122.1 48.8C11.4 395.4 0 387.7 0 376.4l0-44c0-8 3-15.6 8.3-21.5L144 161.6 144 48zm224 80l192 0c44.2 0 80 35.8 80 80l0 160c0 26.2-12.6 49.4-32 64l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-160 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c-19.4-14.6-32-37.8-32-64l0-160c0-44.2 35.8-80 80-80zm0 176l192 0 0-32c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32l0 32zm0 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: truck-plane
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for truck-plane (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-truck-plane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-truck-plane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-truck-plane 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-truck-plane 3s ease-in-out infinite alternate;
}
</style>