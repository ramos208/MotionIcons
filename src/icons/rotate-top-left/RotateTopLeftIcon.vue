<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M3 15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22C13.2998 22 14.9497 22 15.9749 20.9749C17 19.9497 17 18.2998 17 15C17 11.7002 17 10.0503 15.9749 9.02513C14.9497 8 13.2998 8 10 8C6.70017 8 5.05025 8 4.02513 9.02513C3 10.0503 3 11.7002 3 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.4201 2L13.0744 3.11013C12.3581 3.70104 12 3.99649 12 4.36364L13 4.36364C16.7712 4.36364 18.6569 4.36364 19.8284 5.53521C21 6.70678 21 8.59241 21 12.3636V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rotate-top-left
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for rotate-top-left (hugeicons). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-rotate-top-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rotate-top-left {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rotate-top-left 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-rotate-top-left 4s linear infinite alternate;
}
</style>