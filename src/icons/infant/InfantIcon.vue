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
      <path d="M19.9504 10.8961C19.5049 14.8926 16.1153 18 12 18C7.88465 18 4.49508 14.8926 4.04963 10.8961C3.87943 10.9632 3.69402 11 3.5 11C2.67157 11 2 10.3284 2 9.5C2 8.67157 2.67157 8 3.5 8C3.75626 8 3.99751 8.06426 4.20851 8.17754C5.03332 4.63736 8.20867 2 12 2C15.7913 2 18.9667 4.63736 19.7915 8.17755C20.0025 8.06426 20.2437 8 20.5 8C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11C20.306 11 20.1206 10.9632 19.9504 10.8961Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 22C18 20.208 17.2144 18.5994 15.9687 17.5M6 22C6 20.208 6.78563 18.5994 8.03126 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 2C13 2 14 2.89543 14 4C14 5.10457 13 6 12 6C11.5 6 10.9246 5.81669 10.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.375 10H8.25M15.625 10H15.75M8.5 10C8.5 10.1381 8.38807 10.25 8.25 10.25C8.11193 10.25 8 10.1381 8 10C8 9.86193 8.11193 9.75 8.25 9.75C8.38807 9.75 8.5 9.86193 8.5 10ZM15.5 10C15.5 10.1381 15.6119 10.25 15.75 10.25C15.8881 10.25 16 10.1381 16 10C16 9.86193 15.8881 9.75 15.75 9.75C15.6119 9.75 15.5 9.86193 15.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15C12.5523 15 13 14.5523 13 14H11C11 14.5523 11.4477 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: infant
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for infant (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-infant {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-infant {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-infant 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-infant 3s ease-in-out infinite alternate;
}
</style>