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
      <path d="M256-32c13.3 0 24 10.7 24 24l0 11c8.6 2.2 16.9 5.6 24.8 10.3L311 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-6.3 6.3c4.6 7.8 8 16.2 10.3 24.8l11 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11 0c-2.2 8.6-5.6 16.9-10.3 24.8L345 151c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-4.1-4.1-30.1 30.1 4.1 4.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-4.1-4.1c-10 10-20 20-30.1 30.1L217 279c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-6.3-6.3c-7.8 4.6-16.2 8-24.8 10.3l0 11c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11c-8.6-2.2-16.9-5.6-24.8-10.3L73 313c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l6.3-6.3c-4.6-7.8-8-16.2-10.3-24.8l-11 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l11 0c2.2-8.6 5.6-16.9 10.3-24.8L39 169c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l4.1 4.1c10-10 20-20 30.1-30.1L103 105c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l4.1 4.1 30.1-30.1-4.1-4.1c-9.4-9.4-9.4-24.6 0-33.9S191.6-2.3 201 7l6.3 6.3c7.8-4.6 16.2-8 24.8-10.3l0-11c0-13.3 10.7-24 24-24zM128 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM240 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm296 40l0 11c8.6 2.2 16.9 5.6 24.8 10.3L567 199c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-6.3 6.3c4.6 7.8 8 16.2 10.3 24.8l11 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11 0c-2.2 8.6-5.6 16.9-10.3 24.8L601 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-4.1-4.1-30.1 30.1 4.1 4.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-4.1-4.1c-10 10-20 20-30.1 30.1L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-6.3-6.3c-7.8 4.6-16.2 8-24.8 10.3l0 11c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11c-8.6-2.2-16.9-5.6-24.8-10.3L329 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l6.3-6.3c-4.6-7.8-8-16.2-10.3-24.8l-11 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l11 0c2.2-8.6 5.6-16.9 10.3-24.8L295 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l4.1 4.1c10-10 20-20 30.1-30.1L359 297c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l4.1 4.1 30.1-30.1-4.1-4.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l6.3 6.3c7.8-4.6 16.2-8 24.8-10.3l0-11c0-13.3 10.7-24 24-24s24 10.7 24 24zM448 384a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bacteria
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bacteria (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bacteria {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bacteria {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bacteria 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bacteria 3s ease-in-out infinite alternate;
}
</style>