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
      <path d="M0 0v24h24V0zm13.515 6.75a.75.75 0 0 1 .696.987l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .727-.513zm-4.499.002a.75.75 0 0 1 .695.985l-3 9A.75.75 0 0 1 6 17.25a.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511zm9 0a.75.75 0 0 1 .695.985l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: what3words
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for what3words (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-what3words {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-what3words {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-what3words 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-what3words 3s ease-in-out infinite alternate;
}
</style>