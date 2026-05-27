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
      <path d="M5.17157 3.17148C4 4.34305 4 6.22867 4 9.99991L4 13.9999C4 17.7711 4 19.6568 5.17157 20.8283M5.17157 3.17148C6.34315 1.99991 8.22876 1.99991 12 1.99991C15.7712 1.99991 17.6569 1.99991 18.8284 3.17148M5.17157 3.17148C5.17157 3.17148 5.17157 3.17148 5.17157 3.17148ZM5.17157 20.8283C6.34315 21.9999 8.22876 21.9999 12 21.9999C15.7712 21.9999 17.6569 21.9999 18.8284 20.8283M5.17157 20.8283C5.17157 20.8283 5.17157 20.8283 5.17157 20.8283ZM18.8284 20.8283C20 19.6568 20 17.7711 20 13.9999L20 9.99991C20 6.22867 20 4.34305 18.8284 3.17148M18.8284 20.8283C18.8284 20.8283 18.8284 20.8283 18.8284 20.8283ZM18.8284 3.17148C18.8284 3.17148 18.8284 3.17148 18.8284 3.17148Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 10.9999L12 12.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 5.49991L12 7.49991" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 16.4999L12 18.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: road01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for road01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-road01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-road01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-road01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-road01 3s ease-in-out infinite alternate;
}
</style>