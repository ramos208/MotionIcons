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
      <path d="M64 64C64 28.7 92.7 0 128 0L384 0c35.3 0 64 28.7 64 64l0 121.3c-46.9 19-80 65-80 118.7 0 27.7 8.8 53.4 23.8 74.4-51.5 21-87.8 71.6-87.8 130.7 0 1 0 1.9 0 2.9l-176 0c-35.3 0-64-28.7-64-64L64 64zM208 400l0 64 53.4 0c7.2-29.4 21.3-56.1 40.4-78.3-6.1-19.5-24.3-33.7-45.8-33.7-26.5 0-48 21.5-48 48zM339 224.3c-1-.2-2-.3-3-.3l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l16.7 0c2.1-22.8 8.4-44.3 18.3-63.7zM176 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM176 224c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm240 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM352 512c0-53 43-96 96-96l96 0c53 0 96 43 96 96 0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: building-user
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for building-user (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-building-user {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-building-user {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-building-user 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-building-user 3s ease-in-out infinite alternate;
}
</style>