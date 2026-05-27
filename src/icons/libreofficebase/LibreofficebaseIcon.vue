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
      <path d="M17 13h-1v-1h1v1zm0 1h-1v1h1v-1zm0 2h-1v1h1v-1zm-.6-16H15l7 7V0h-5.6zM13 0l9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM6 11c0 .552 1.343 1 3 1s3-.448 3-1v-1c0-.552-1.343-1-3-1s-3 .448-3 1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm12-6h-5v7h5v-7zm-3 1h-1v1h1v-1zm0 4h-1v1h1v-1zm0-2h-1v1h1v-1z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: libreofficebase
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for libreofficebase (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-libreofficebase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-libreofficebase {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-libreofficebase 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-libreofficebase 3s ease-in-out infinite alternate;
}
</style>