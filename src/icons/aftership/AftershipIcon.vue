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
      <path d="M22.549 9.604a10.462 10.462 0 0 0-3.388-6.838A10.632 10.632 0 0 0 12 0a10.64 10.64 0 0 0-7.16 2.764 10.465 10.465 0 0 0-3.428 7.74c0 2.371.81 4.672 2.298 6.529a10.617 10.617 0 0 0 5.895 3.698L12 24l2.395-3.27a10.593 10.593 0 0 0 5.895-3.697 10.442 10.442 0 0 0 2.26-7.43zm-11.306 6.28a.26.26 0 0 1-.034.125.254.254 0 0 1-.347.092l-3.906-2.237a1.005 1.005 0 0 1-.505-.865V8.624a.26.26 0 0 1 .033-.126.254.254 0 0 1 .347-.092l3.907 2.237c.152.089.281.214.368.366.09.151.135.324.135.5v4.372zM12 9.48c-.176 0-.35-.047-.503-.133L7.5 7.057a.241.241 0 0 1-.09-.092.249.249 0 0 1 .09-.342l3.997-2.289a1.025 1.025 0 0 1 1.007 0l3.996 2.29a.24.24 0 0 1 .09.092.247.247 0 0 1 0 .25.271.271 0 0 1-.09.092l-3.997 2.289A1.005 1.005 0 0 1 12 9.48ZM17.546 13a.996.996 0 0 1-.503.866l-3.908 2.237a.254.254 0 0 1-.38-.218V11.51c0-.175.047-.348.135-.501.089-.152.216-.28.368-.366l3.907-2.238a.254.254 0 0 1 .38.219z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aftership
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aftership (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aftership {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aftership {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aftership 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aftership 3s ease-in-out infinite alternate;
}
</style>