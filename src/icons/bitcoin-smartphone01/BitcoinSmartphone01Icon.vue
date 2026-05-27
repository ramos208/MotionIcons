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
      <path d="M11.125 19H11M11.25 19C11.25 19.1381 11.1381 19.25 11 19.25C10.8619 19.25 10.75 19.1381 10.75 19C10.75 18.8619 10.8619 18.75 11 18.75C11.1381 18.75 11.25 18.8619 11.25 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 15C18 18.2998 18 19.9497 16.9749 20.9749C15.9497 22 14.2998 22 11 22C7.70017 22 6.05025 22 5.02513 20.9749C4 19.9497 4 18.2998 4 15V9C4 5.70017 4 4.05025 5.02513 3.02513C6.05025 2 7.70017 2 11 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 3.5H18C18.8284 3.5 19.5 4.17157 19.5 5V5.5C19.5 6.32843 18.8284 7 18 7H15M15 3.5V7M15 3.5H14M15 7H18.5C19.3284 7 20 7.67157 20 8.5V9C20 9.82843 19.3284 10.5 18.5 10.5H15M15 7V10.5M17 3.5V2M17 10.5V12M15 10.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitcoin-smartphone01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bitcoin-smartphone01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bitcoin-smartphone01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bitcoin-smartphone01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitcoin-smartphone01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bitcoin-smartphone01 3s ease-in-out infinite alternate;
}
</style>