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
      <path d="M5.389 0A5.377 5.377 0 0 0 0 5.389V18.61A5.377 5.377 0 0 0 5.389 24H18.61A5.377 5.377 0 0 0 24 18.611V5.39A5.377 5.377 0 0 0 18.611 0Zm11.546 4.595h.942v3.122h.69v.868h-.69v1.201h-1.001V8.585H14.68v-.964zm-6.07.589h2.523v14.842h-3.094V9.79H6.68V7.805c.95-.042 1.616-.103 1.997-.184.606-.13 1.1-.39 1.48-.779.26-.266.457-.62.592-1.064.077-.267.116-.464.116-.594Zm5.989.73L15.513 7.72h1.365V5.915Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 1dot1dot1dot1
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 1dot1dot1dot1 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-1dot1dot1dot1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-1dot1dot1dot1 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-1dot1dot1dot1 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-1dot1dot1dot1 3s ease-in-out infinite alternate;
}
</style>