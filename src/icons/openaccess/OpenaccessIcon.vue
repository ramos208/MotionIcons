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
      <path d="M18.971 13.486a7.56 7.56 0 00-.54-1.043V6.415a6.375 6.375 0 00-1.88-4.535A6.374 6.374 0 0012.017 0h-.002a6.374 6.374 0 00-4.536 1.878 6.375 6.375 0 00-1.88 4.537v.877h2.57v-.877c0-1.026.4-1.992 1.127-2.72a3.822 3.822 0 012.72-1.125 3.852 3.852 0 013.847 3.845v3.508A7.52 7.52 0 0012 8.865a7.54 7.54 0 00-5.35 2.216 7.54 7.54 0 00-2.216 5.35 7.54 7.54 0 002.215 5.35A7.54 7.54 0 0012 24a7.54 7.54 0 005.35-2.216 7.54 7.54 0 002.216-5.35c0-1.021-.2-2.012-.595-2.946zM12 21.428a5.003 5.003 0 01-4.997-4.996A5.003 5.003 0 0112 11.435a5.002 5.002 0 014.997 4.997A5.002 5.002 0 0112 21.428zm2.145-4.973a2.12 2.12 0 11-4.24 0 2.12 2.12 0 014.24 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: openaccess
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for openaccess (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-openaccess {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-openaccess {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-openaccess 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-openaccess 3s ease-in-out infinite alternate;
}
</style>