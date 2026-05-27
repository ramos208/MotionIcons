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
      <path d="M1.065 6.534C.355 8.246 0 10.068 0 11.999c0 1.932.355 3.754 1.065 5.466a13.768 13.768 0 0 0 3.068 4.549h2.685c-2.784-2.756-4.176-6.094-4.176-10.015 0-3.92 1.392-7.258 4.176-10.014H4.133a13.768 13.768 0 0 0-3.068 4.549Zm21.869 10.931c.71-1.712 1.066-3.534 1.066-5.466 0-1.931-.356-3.753-1.066-5.465a13.768 13.768 0 0 0-3.068-4.549h-2.685c2.784 2.756 4.176 6.094 4.176 10.014 0 3.921-1.392 7.259-4.176 10.015h2.685a13.768 13.768 0 0 0 3.068-4.549ZM11.63 3.299H9.854v10.21h1.776v-.033l7.218-7.218-1.151-1.151-6.067 6.067V3.299Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: datefns
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for datefns (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-datefns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-datefns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-datefns 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-datefns 3s ease-in-out infinite alternate;
}
</style>