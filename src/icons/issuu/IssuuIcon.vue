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
      <path d="M.996 0A.998.998 0 0 0 0 .996V12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0H.996zm11.17 3.582a8.333 8.333 0 0 1 8.254 8.41 8.333 8.333 0 0 1-8.41 8.252c-4.597-.045-8.296-3.81-8.254-8.41.045-4.6 3.81-8.296 8.41-8.252zm-.031 2.27a6.107 6.107 0 0 0-6.155 6.046 6.109 6.109 0 0 0 6.05 6.163 6.099 6.099 0 0 0 6.154-6.047 6.107 6.107 0 0 0-6.041-6.162h-.008zm-.02 3.013a3.098 3.098 0 0 1 3.063 3.123 3.088 3.088 0 0 1-3.121 3.06l.002-.001a3.091 3.091 0 0 1 .056-6.182z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: issuu
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for issuu (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-issuu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-issuu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-issuu 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-issuu 3s ease-in-out infinite alternate;
}
</style>