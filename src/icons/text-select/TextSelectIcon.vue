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
      <path d="M9.99877 2.5C9.45899 2.50516 8.96002 2.51488 8.49784 2.53315M14.0012 2.5C14.541 2.50516 15.04 2.51488 15.5022 2.53315M19.0043 3.13088C19.43 3.32055 19.7943 3.56673 20.1138 3.88624C20.4333 4.20575 20.6794 4.56995 20.8691 4.99568M3.13088 4.99568C3.32056 4.56995 3.56673 4.20575 3.88624 3.88624C4.20575 3.56673 4.56995 3.32055 4.99568 3.13088M21.5 9.99877C21.4948 9.45899 21.4851 8.96002 21.4669 8.49784M21.5 14.0012C21.4948 14.5409 21.4851 15.0399 21.4669 15.5021M20.8691 19.0043C20.6794 19.43 20.4333 19.7943 20.1138 20.1138C19.7943 20.4333 19.43 20.6794 19.0043 20.8691M15.5022 21.4668C15.04 21.4851 14.541 21.4948 14.0012 21.5M9.99877 21.5C9.45898 21.4948 8.96 21.4851 8.49781 21.4668M4.99568 20.8691C4.56995 20.6794 4.20575 20.4333 3.88624 20.1138C3.56673 19.7943 3.32056 19.43 3.13088 19.0043M2.5 14.0012C2.50516 14.5409 2.51488 15.0399 2.53315 15.5021M2.5 9.99884C2.50516 9.45904 2.51488 8.96004 2.53315 8.49784" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 8H15M7 12H17M7 16H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: text-select
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for text-select (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-text-select {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-text-select {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-text-select 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-text-select 3s ease-in-out infinite alternate;
}
</style>