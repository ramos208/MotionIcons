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
      <path d="M50 284.8c4.2 2.1 9 3.2 14 3.2l50.7 0c8.5 0 16.6 3.4 22.6 9.4l13.3 13.3c6 6 14.1 9.4 22.6 9.4l18.7 0c17.7 0 32-14.3 32-32l0-40c0-13.3 10.7-24 24-24s24-10.7 24-24l0-42.7c0-8.5 3.4-16.6 9.4-22.6l13.3-13.3c6-6 9.4-14.1 9.4-22.6L304 57c0-1.2-.1-2.3-.2-3.5-15.4-3.6-31.4-5.5-47.8-5.5-114.9 0-208 93.1-208 208 0 9.8 .7 19.4 2 28.8zm403.3 37.3c-3.2-1.4-6.7-2.1-10.5-2.1L432 320c-8.8 0-16-7.2-16-16s-7.2-16-16-16l-34.7 0c-8.5 0-16.6 3.4-22.6 9.4l-45.3 45.3c-6 6-9.4 14.1-9.4 22.6l0 18.7c0 17.7 14.3 32 32 32l18.7 0c8.5 0 16.6 3.4 22.6 9.4 2.2 2.2 4.7 4.1 7.3 5.5 39.3-25.4 69.5-63.6 84.6-108.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM128 368c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM272 256c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8-7.2-16-16-16zm48-112l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: earth-asia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for earth-asia (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-earth-asia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-earth-asia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-earth-asia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-earth-asia 3s ease-in-out infinite alternate;
}
</style>