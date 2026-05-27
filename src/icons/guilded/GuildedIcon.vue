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
      <path d="M5.297 6.255s.02 2.846 1.481 5.79c1.502 2.834 3.572 4.654 5.28 5.38 1.765-.826 3.47-2.258 4.4-3.8h-4.845c-1.253-1.04-2.24-2.763-2.466-4.755H23.36c-.701 3.203-2.188 6.116-3.605 7.971a17.108 17.108 0 01-7.686 5.659h-.045c-5.098-2.031-7.84-5.23-9.65-8.84C1.214 11.347 0 7.147 0 1.5h24a34.23 34.23 0 01-.32 4.755z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: guilded
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for guilded (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-guilded {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-guilded {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-guilded 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-guilded 3s ease-in-out infinite alternate;
}
</style>