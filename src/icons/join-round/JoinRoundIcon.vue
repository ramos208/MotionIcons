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
      <path d="M15.9997 22H17.9997C19.8853 22 20.8281 22 21.4139 21.4142C21.9997 20.8284 21.9997 19.8856 21.9997 18V17C21.9997 15.1144 21.9997 14.1716 21.4139 13.5858C20.8281 13 19.8853 13 17.9997 13L14.9997 13C13.114 13 12.1712 13 11.5855 12.4142C10.9997 11.8284 10.9997 10.8856 10.9997 9V6C10.9997 4.11438 10.9997 3.17157 10.4139 2.58579C9.82809 2 8.88528 2 6.99966 2L5.99966 2C4.11405 2 3.17124 2 2.58545 2.58579C1.99966 3.17157 1.99966 4.11438 1.99966 6L1.99966 8C1.99966 14.5997 1.99967 17.8995 4.04992 19.9497C6.10017 22 9.4 22 15.9997 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: join-round
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for join-round (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-join-round {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-join-round {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-join-round 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-join-round 3s ease-in-out infinite alternate;
}
</style>