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
      <path d="M5.25 17.8752V18.0002M5.5 18.0002C5.5 18.1383 5.38807 18.2502 5.25 18.2502C5.11193 18.2502 5 18.1383 5 18.0002C5 17.8621 5.11193 17.7502 5.25 17.7502C5.38807 17.7502 5.5 17.8621 5.5 18.0002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.75 17.875V18M19 18C19 18.1381 18.8881 18.25 18.75 18.25C18.6119 18.25 18.5 18.1381 18.5 18C18.5 17.8619 18.6119 17.75 18.75 17.75C18.8881 17.75 19 17.8619 19 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.99997 21H19C20.6568 21 22 19.6569 22 18C22 16.3431 20.6568 15 19 15H4.99997C3.34312 15 1.99997 16.3431 1.99997 18C1.99997 19.6569 3.34311 21 4.99997 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 3V4C17 5 19 5 19 6C19 7 17 7 17 8C17 9 19 9 19 10C19 11 17 11 17 12C17 13 19 13 19 14V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.99997 15V3.5C3.99997 3.22386 4.22383 3 4.49997 3C6.43297 3 7.99997 4.567 7.99997 6.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pocket-knife
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pocket-knife (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pocket-knife {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pocket-knife {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pocket-knife 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pocket-knife 3s ease-in-out infinite alternate;
}
</style>