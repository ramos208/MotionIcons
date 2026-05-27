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
      <path d="M384 144C384 64.5 312.4 0 224 0S64 64.5 64 144c0 47.1 25.1 88.9 64 115.2l0 28.8c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-28.8c38.9-26.3 64-68.1 64-115.2zM160 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM445.5 339.7c-6.8-16.3-25.5-24-41.8-17.2L224 397.3 44.3 322.5c-16.3-6.8-35 .9-41.8 17.2s.9 35 17.2 41.8L140.8 432 19.7 482.5C3.4 489.3-4.3 508 2.5 524.3s25.5 24 41.8 17.2L224 466.7 403.7 541.5c16.3 6.8 35-.9 41.8-17.2s-.9-35-17.2-41.8L307.2 432 428.3 381.5c16.3-6.8 24-25.5 17.2-41.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: skull-crossbones
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for skull-crossbones (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-skull-crossbones {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-skull-crossbones {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-skull-crossbones 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-skull-crossbones 3s ease-in-out infinite alternate;
}
</style>