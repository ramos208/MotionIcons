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
      <path d="M8 0L0 4.8v9.6C0 20.8 4.8 24 8.8 24c1.348 0 2.786-.362 4.1-1.088l6.303-3.633C21.687 18.155 24 15.64 24 11.2V.8L22.4 0 16 4v10.4c0 1.6-.3 2.898-.785 3.948-2.002-.257-5.615-1.597-5.615-7.15V.802zm0 1.76v9.44c0 5.342 3.346 7.9 6.313 8.597-1.618 1.99-4.025 2.603-5.512 2.603-2.4 0-7.2-1.6-7.2-8V5.6zm14.4.04v9.4c0 5.45-3.482 6.84-5.504 7.132.446-1.14.704-2.45.704-3.932V4.8z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: udacity
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for udacity (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-udacity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-udacity {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-udacity 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-udacity 3s ease-in-out infinite alternate;
}
</style>