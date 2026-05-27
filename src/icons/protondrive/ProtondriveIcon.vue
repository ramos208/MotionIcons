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
      <path d="M24 6.595v12.79c0 1.36-1.11 2.462-2.482 2.462h-1.62V9a2.925 2.925 0 0 0-2.93-2.914l-9.42.053a.943.943 0 0 1-.55-.172L4.905 4.493a2.918 2.918 0 0 0-1.694-.536H.1A2.47 2.47 0 0 1 2.482 2.15h4.657c.47 0 .928.148 1.305.424l1.559 1.134c.38.276.837.424 1.308.424h10.207A2.471 2.471 0 0 1 24 6.595zM18.897 9v12.85H2.482A2.471 2.471 0 0 1 0 19.387V4.957h3.21c.4 0 .792.122 1.118.353l2.095 1.476a1.94 1.94 0 0 0 1.13.353l9.402-.052A1.922 1.922 0 0 1 18.897 9z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: protondrive
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for protondrive (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-protondrive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-protondrive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-protondrive 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-protondrive 3s ease-in-out infinite alternate;
}
</style>