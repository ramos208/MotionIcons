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
      <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 392c0 30.9 25.1 56 56 56l184 0 0-48-184 0c-4.4 0-8-3.6-8-8l0-232 192 0 0-48-192 0 0-88zM336 224l192 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-82.7 0c-8.5 0-16.6-3.4-22.6-9.4l-8.6-8.6c-9-9-21.2-14.1-33.9-14.1L336 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48zm0 288l192 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-82.7 0c-8.5 0-16.6-3.4-22.6-9.4l-8.6-8.6c-9-9-21.2-14.1-33.9-14.1L336 288c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: folder-tree
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for folder-tree (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-folder-tree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-folder-tree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-folder-tree 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-folder-tree 3s ease-in-out infinite alternate;
}
</style>