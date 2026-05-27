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
      <path d="M64 32C64 14.3 78.3 0 96 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 151.7c-18.5 0-37 7-51.1 21.1-21.6 21.6-26.6 53.6-15 79.9-26.9 10.4-45.9 36.6-45.9 67.1s19 56.7 45.9 67.1c-7.3 16.5-8 35.2-2.3 52.2-13.4 5.7-28.2 8.8-43.6 8.8-61.9 0-112-50.1-112-112L96 64C78.3 64 64 49.7 64 32zm96 32l0 128 96 0 0-128-96 0zM280 408c-13.3 0-24-10.7-24-24s10.7-24 24-24c28.8 0 43.2-34.8 22.9-55.2-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c20.4 20.4 55.2 5.9 55.2-22.9 0-13.3 10.7-24 24-24s24 10.7 24 24c0 28.8 34.8 43.2 55.2 22.9 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-20.4 20.4-5.9 55.2 22.9 55.2 13.3 0 24 10.7 24 24s-10.7 24-24 24c-28.8 0-43.2 34.8-22.9 55.2 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-20.4-20.4-55.2-5.9-55.2 22.9 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-28.8-34.8-43.2-55.2-22.9-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c20.4-20.4 5.9-55.2-22.9-55.2zm104-32a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vial-virus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vial-virus (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vial-virus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vial-virus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vial-virus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vial-virus 3s ease-in-out infinite alternate;
}
</style>