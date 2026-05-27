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
      <path d="M20.098 0A3.899 3.899 0 0 1 24 3.903v16.194A3.899 3.899 0 0 1 20.098 24H6.393l-.051-10.34v-.074c0-3.92 3.112-7.09 6.963-7.09 2.31 0 4.177 1.902 4.177 4.254 0 2.352-1.867 4.254-4.177 4.254-.77 0-1.393-.634-1.393-1.418 0-.783.623-1.418 1.393-1.418.769 0 1.392-.634 1.392-1.418 0-.784-.623-1.418-1.392-1.418-2.31 0-4.178 1.9-4.178 4.253 0 2.352 1.868 4.254 4.178 4.254 3.85 0 6.962-3.169 6.962-7.09 0-3.92-3.112-7.089-6.962-7.089-5.39 0-9.75 4.436-9.75 9.925v.086l.023 10.315A3.899 3.899 0 0 1 0 20.097V3.903A3.899 3.899 0 0 1 3.902 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: photopea
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for photopea (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-photopea {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-photopea {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-photopea 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-photopea 3s ease-in-out infinite alternate;
}
</style>