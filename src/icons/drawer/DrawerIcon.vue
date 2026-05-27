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
      <path d="M21 14H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 8H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 11H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 5H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 2.6V19.4C21 19.7314 20.7314 20 20.4 20H3.6C3.26863 20 3 19.7314 3 19.4V2.6C3 2.26863 3.26863 2 3.6 2H20.4C20.7314 2 21 2.26863 21 2.6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drawer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drawer (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drawer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drawer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drawer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drawer 3s ease-in-out infinite alternate;
}
</style>