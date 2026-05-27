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
      <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l249.3 0c-6-14.8-9.3-31-9.3-48 0-17.7 7.2-33.7 18.8-45.3-11.9-19.4-18.8-42.3-18.8-66.7 0-17.7 7.2-33.7 18.8-45.3-11.9-19.4-18.8-42.3-18.8-66.7 0-25.2 14.5-46.9 35.6-57.4-2.4-7.1-3.6-14.7-3.6-22.6l0-32C368 96.7 388 70.1 415.9 60.1 413.9 26.6 386 0 352 0L96 0zM208 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM128 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM128 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm352 0l-16 0c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80 0-8.8-7.2-16-16-16zm16 128c0-8.8-7.2-16-16-16l-16 0c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80zm0 112c0-8.8-7.2-16-16-16l-16 0c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80zM496 528c0-44.2-35.8-80-80-80l-16 0c-8.8 0-16 7.2-16 16 0 44.2 35.8 80 80 80l16 0c8.8 0 16-7.2 16-16zm-16-96c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80l-16 0c-8.8 0-16 7.2-16 16 0 44.2 35.8 80 80 80l16 0zm16-128c0-44.2-35.8-80-80-80l-16 0c-8.8 0-16 7.2-16 16 0 44.2 35.8 80 80 80l16 0c8.8 0 16-7.2 16-16zM512 64c-13.3 0-24 10.7-24 24l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104c0-13.3-10.7-24-24-24zm96 64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32zM440 104c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32c0-13.3-10.7-24-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: building-wheat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for building-wheat (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-building-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-building-wheat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-building-wheat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-building-wheat 3s ease-in-out infinite alternate;
}
</style>