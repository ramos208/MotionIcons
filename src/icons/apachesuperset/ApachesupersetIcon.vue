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
      <path d="M6.168 6.045C2.603 6.045 0 8.579 0 12.014c0 3.434 2.603 5.941 6.168 5.941 2.184 0 3.888-1.026 5.775-3.078 1.53 2.033 4.037 3.136 5.89 3.078 3.566 0 6.167-2.503 6.167-5.941 0-3.438-2.601-5.97-6.168-5.97-2.864 0-5.138 2.425-5.771 3.173-.76-.9-1.674-1.665-2.682-2.274-1.019-.588-2.084-.898-3.211-.898Zm2.875 1.303c1.156.595 1.952 1.42 2.639 2.304-.534.63-1.245 1.483-1.739 2.07-.56-.658-1.58-1.907-2.609-2.308ZM6.186 9.703c1.018.027 1.81.458 3.435 2.408-1.158 1.378-2.202 2.244-3.435 2.244-1.51 0-2.41-.99-2.41-2.31s.906-2.382 2.41-2.342zm11.535 0c1.51 0 2.408 1.026 2.408 2.342 0 1.315-.862 2.301-2.402 2.31-.571-.037-1.529-.026-3.442-2.314l.074-.09.002.002c1.122-1.328 2.097-2.25 3.36-2.25zm-3.762 2.738c.61.68 1.795 1.988 2.713 2.24l-1.684 2.016h-.002c-.753-.371-2.031-1.134-2.716-2.215l1.689-2.04z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: apachesuperset
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for apachesuperset (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-apachesuperset {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-apachesuperset {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-apachesuperset 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-apachesuperset 3s ease-in-out infinite alternate;
}
</style>