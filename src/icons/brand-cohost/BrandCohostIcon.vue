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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 14a3 2 0 1 0 6 0a3 2 0 1 0 -6 0"/><path d="M4.526 17.666c-1.133 -.772 -1.897 -1.924 -2.291 -3.456c-.398 -1.54 -.29 -2.937 .32 -4.19c.61 -1.255 1.59 -2.34 2.938 -3.254c1.348 -.914 2.93 -1.625 4.749 -2.132c1.81 -.504 3.516 -.708 5.12 -.61c1.608 .1 2.979 .537 4.112 1.31s1.897 1.924 2.291 3.456c.398 1.541 .29 2.938 -.32 4.192c-.61 1.253 -1.59 2.337 -2.938 3.252c-1.348 .915 -2.93 1.626 -4.749 2.133c-1.81 .503 -3.516 .707 -5.12 .61c-1.608 -.102 -2.979 -.538 -4.112 -1.31"/><path d="M11 12.508c-.53 -.316 -1.23 -.508 -2 -.508c-1.657 0 -3 .895 -3 2s1.343 2 3 2c.767 0 1.467 -.192 2 -.508"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-cohost
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-cohost (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-cohost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-cohost {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-cohost 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-cohost 3s ease-in-out infinite alternate;
}
</style>