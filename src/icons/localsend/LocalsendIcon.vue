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
      <path d="M5.538 12.015A6.458 6.458 0 0 1 12 5.561a6.458 6.458 0 0 1 6.462 6.454A6.458 6.458 0 0 1 12 18.389a6.458 6.458 0 0 1-6.461-6.374zM22.53 6.262a1.847 1.847 0 0 1-2.472-.42 10.219 10.219 0 0 0-1.877-1.875 1.843 1.843 0 0 1-.421-2.469 12.048 12.048 0 0 1 4.77 4.764zm-18.587-.42a1.847 1.847 0 0 1-2.472.42 12.048 12.048 0 0 1 4.77-4.764 1.843 1.843 0 0 1-.42 2.469 10.219 10.219 0 0 0-1.878 1.875ZM24 12.015c.001 1.14-.16 2.275-.48 3.37a1.844 1.844 0 0 1-1.452-2.043c.115-.88.115-1.773 0-2.654a1.844 1.844 0 0 1 1.451-2.043c.32 1.095.482 2.23.481 3.37zm-24 0c0-1.14.162-2.275.482-3.37a1.844 1.844 0 0 1 1.45 2.043c-.115.88-.115 1.773 0 2.654a1.844 1.844 0 0 1-1.45 2.043A11.971 11.971 0 0 1 0 12.014Zm17.76 10.518a1.843 1.843 0 0 1 .42-2.47 10.218 10.218 0 0 0 1.878-1.875 1.847 1.847 0 0 1 2.472-.42 12.048 12.048 0 0 1-4.77 4.765zm-11.519 0a12.048 12.048 0 0 1-4.77-4.764 1.847 1.847 0 0 1 2.472.42 10.219 10.219 0 0 0 1.877 1.874c.765.587.948 1.663.421 2.47zM12.001 24a12.008 12.008 0 0 1-3.375-.48 1.846 1.846 0 0 1 2.046-1.45c.882.115 1.775.115 2.657 0a1.846 1.846 0 0 1 2.046 1.449c-1.096.32-2.233.482-3.375.481Zm1.506-22.057c-.945-.136-1.888-.1-2.834-.013A1.848 1.848 0 0 1 8.626.48 12.013 12.013 0 0 1 11.999 0h.002c1.142-.001 2.277.16 3.373.48a1.845 1.845 0 0 1-1.867 1.463z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: localsend
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for localsend (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-localsend {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-localsend {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-localsend 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-localsend 3s ease-in-out infinite alternate;
}
</style>