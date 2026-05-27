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
      <path d="M17.2 0a1.2 1.2 0 0 1 1.2 1.2v4a1.2 1.2 0 0 1-1.2 1.2h-.402v1.212l6.976 9.687a1.2 1.2 0 0 1 .22.576L24 18v4.8a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 22.8V18c0-.252.08-.497.226-.701l6.975-9.687V6.4H6.8a1.2 1.2 0 0 1-1.194-1.084L5.6 5.2v-4A1.2 1.2 0 0 1 6.8 0zM16 2.4H8V4h.4a1.2 1.2 0 0 1 1.195 1.084l.006.116v2.703c0 .315-.1.622-.283.877L2.4 18.386V21.6h19.2v-3.213L14.681 8.78a1.5 1.5 0 0 1-.277-.743l-.006-.134V5.2a1.2 1.2 0 0 1 1.2-1.2H16zm-.48 14.4a1.2 1.2 0 0 1 0 2.4h-2.88a1.2 1.2 0 0 1 0-2.4zm-6.137-4.449 2.135 2.135a1.2 1.2 0 0 1 0 1.697l-2.135 2.135a1.2 1.2 0 1 1-1.697-1.697l1.286-1.286-1.286-1.286a1.2 1.2 0 0 1-.078-1.612l.078-.086a1.2 1.2 0 0 1 1.697 0"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: labex
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for labex (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-labex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-labex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-labex 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-labex 3s ease-in-out infinite alternate;
}
</style>