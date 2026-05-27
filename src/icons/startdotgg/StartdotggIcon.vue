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
      <path d="M6 0A5.999 5.999 0 00.002 6v5.252a.75.75 0 00.75.748H5.25a.748.748 0 00.75-.747V6.749C6 6.334 6.336 6 6.748 6h16.497a.748.748 0 00.749-.748V.749A.743.743 0 0023.247 0zm12.75 12a.748.748 0 00-.75.75v4.5a.748.748 0 01-.747.748H.753a.754.754 0 00-.75.751v4.5a.75.75 0 00.75.751H18a5.999 5.999 0 005.999-6v-5.25a.75.75 0 00-.75-.75z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: startdotgg
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for startdotgg (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-startdotgg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-startdotgg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-startdotgg 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-startdotgg 3s ease-in-out infinite alternate;
}
</style>