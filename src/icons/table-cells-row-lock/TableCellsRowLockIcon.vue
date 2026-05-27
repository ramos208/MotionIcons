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
      <path d="M256 288l0-64 153.3 0c17.1-42.2 56-73.2 102.7-79l0-49c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96l0 320c0 35.3 28.7 64 64 64l241.3 0c-.9-5.2-1.3-10.6-1.3-16.1l0-47.9-112 0 0-64 113.3 0c3.7-22 14.8-41.4 30.7-55.6l0-8.4-144 0zm0-192l192 0 0 64-192 0 0-64zM560 272.1l0 47.9-64 0 0-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32zM416 368l0 96c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-96c0-20.9-13.4-38.7-32-45.3l0-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 50.6c-18.6 6.6-32 24.4-32 45.3z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: table-cells-row-lock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for table-cells-row-lock (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-table-cells-row-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-table-cells-row-lock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-table-cells-row-lock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-table-cells-row-lock 3s ease-in-out infinite alternate;
}
</style>