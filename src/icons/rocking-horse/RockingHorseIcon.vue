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
      <path d="M2 17C4.45659 19.455 8.02658 21 12 21C15.9734 21 19.5434 19.455 22 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.5 17.5L18.9445 15.6852C18.0124 14.5977 17.5 13.2127 17.5 11.7805V9L18 8L21 9L22 7.5L18.5 4.5V3L17 4.5C17 4.5 14.7581 5.62096 14.1504 8.5089C13.9798 9.31958 13.3284 10 12.5 10H10.042C8.63807 10 7.5 11.1381 7.5 12.542C7.5 13.4948 7.23223 14.4284 6.72724 15.2364L4.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 10.5C8.5 10.5 7.86936 10.2387 7.51246 9.52492C7.15556 8.81112 6.55638 8.5 5.8541 8.5C4.83011 8.5 4 9.33011 4 10.3541V11.5858C4 12.4913 3.64029 13.3597 3 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 19L16.5383 16.2306C15.5598 15.1298 14.1573 14.5 12.6846 14.5C11.002 14.5 9.42536 15.3209 8.4605 16.6993L6.5 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rocking-horse
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rocking-horse (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rocking-horse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rocking-horse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rocking-horse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rocking-horse 3s ease-in-out infinite alternate;
}
</style>