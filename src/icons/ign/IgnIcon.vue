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
      <path d="M5.38 7.66c.59-.9 1.359-1.67 2.26-2.26.13-1.18.31-2.26.52-3.21a10.602 10.602 0 0 0-6 6c.95-.22 2.03-.39 3.21-.52m10.97-2.3v.02c.9.59 1.67 1.37 2.27 2.27 1.18.13 2.26.31 3.21.52a10.632 10.632 0 0 0-6.02-6.01c.22.95.4 2.02.54 3.2m-8.7 13.26c-.9-.59-1.67-1.37-2.27-2.27h-.03c-1.19-.14-2.26-.32-3.19-.54 1.07 2.75 3.26 4.95 6.01 6.02-.22-.95-.39-2.03-.52-3.21m11-2.27h-.03c-.59.9-1.37 1.67-2.27 2.27v.03c-.14 1.17-.32 2.25-.54 3.19a10.593 10.593 0 0 0 6.03-6.03c-.94.22-2 .4-3.19.54M10.04.01h3.9c.85 1.85 1.2 4.59 1.3 5.52.04.22.06.43.06.63L12 9.12 8.7 6.16c0-.17.02-.35.05-.55.1-.95.43-3.75 1.29-5.61M8.7 17.84c0 .17.02.35.05.55.1.95.43 3.75 1.29 5.61h3.9c.85-1.84 1.2-4.59 1.3-5.52.04-.22.06-.43.06-.64L12 14.88l-3.3 2.96ZM6.16 8.69c-.17 0-.35.02-.55.05-.95.12-3.75.45-5.61 1.31v3.9c1.84.85 4.59 1.19 5.52 1.3.22.04.43.06.64.06l2.95-3.3-2.95-3.3v-.02ZM24 10.03c-1.86-.86-4.66-1.19-5.61-1.29-.2-.03-.38-.05-.55-.05l-2.96 3.3 2.96 3.3c.2 0 .41-.02.64-.06.93-.11 3.68-.45 5.52-1.3v-3.9Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ign (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ign 3s ease-in-out infinite alternate;
}
</style>