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
      <path d="M12 0C6.684 0 2.292 5.38 2.292 12S6.652 24 12 24c5.347 0 9.708-5.38 9.708-12S17.316 0 12 0zM4.106 16.233c-.19-.604-.35-1.241-.414-1.878L12 8.18l8.371 6.175a12.334 12.334 0 0 1-.413 1.878v.032h-.032L12 10.345zm.923 2.101-.032-.032L12 13.114l7.003 5.188v.032c-1.655 2.897-4.202 4.616-6.987 4.616s-5.363-1.751-6.987-4.616zM12 5.347l-8.53 6.335v-.032c.063-2.674.954-5.284 2.61-7.385C7.67 2.324 9.772 1.21 12 1.21c2.228 0 4.36 1.114 5.92 3.055 1.56 1.942 2.515 4.616 2.61 7.417v.032l-.031-.032z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: citroen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for citroen (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-citroen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-citroen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-citroen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-citroen 3s ease-in-out infinite alternate;
}
</style>