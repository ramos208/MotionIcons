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
      <path d="M128 0C92.7 0 64 28.7 64 64l0 384c0 35.3 28.7 64 64 64l48 0 0-112c0-35.3 28.7-64 64-64l208 0 0-272c0-35.3-28.7-64-64-64L128 0zm32 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM304 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM520 380c-24.3 0-44 19.7-44 44l0 80c0 24.3 19.7 44 44 44l16 0c24.3 0 44-19.7 44-44l0-80c0-24.3-19.7-44-44-44l-16 0zm-4 44c0-2.2 1.8-4 4-4l16 0c2.2 0 4 1.8 4 4l0 80c0 2.2-1.8 4-4 4l-16 0c-2.2 0-4-1.8-4-4l0-80zm-168 0l0 80c0 24.3 19.7 44 44 44l16 0c24.3 0 44-19.7 44-44l0-24c0-11-9-20-20-20l-8 0c-11 0-20 9-20 20 0 6.5 3.1 12.4 8 16l0 8c0 2.2-1.8 4-4 4l-16 0c-2.2 0-4-1.8-4-4l0-80c0-2.2 1.8-4 4-4l20.4 0c1.9 9.1 9.9 16 19.6 16 11 0 20-9 20-20 0-19.9-16.1-36-36-36l-24 0c-24.3 0-44 19.7-44 44zm-90.1-32.9c-4.1-8.3-13.5-12.7-22.5-10.5S220 390.7 220 400l0 128c0 11 9 20 20 20s20-9 20-20l0-43.3 26.1 52.2c4.1 8.3 13.5 12.7 22.5 10.5S324 537.3 324 528l0-128c0-11-9-20-20-20s-20 9-20 20l0 43.3-26.1-52.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: building-ngo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for building-ngo (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-building-ngo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-building-ngo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-building-ngo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-building-ngo 3s ease-in-out infinite alternate;
}
</style>