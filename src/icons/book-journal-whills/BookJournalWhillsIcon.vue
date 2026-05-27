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
      <path d="M96 512l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-66.7c18.6-6.6 32-24.4 32-45.3l0-288c0-26.5-21.5-48-48-48L96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96zM64 416c0-17.7 14.3-32 32-32l256 0 0 64-256 0c-17.7 0-32-14.3-32-32zM274.1 99.2c2.6-2.6 6.7-3.1 9.9-1.1 32.1 20 53.4 55.6 53.4 96.2 0 62.6-50.7 113.3-113.3 113.3S110.7 256.9 110.7 194.3c0-40.6 21.4-76.2 53.4-96.2 3.1-2 7.2-1.5 9.9 1.1s3.1 6.7 1.2 9.8c-5.2 8.6-8.2 18.7-8.2 29.5 0 15.1 5.9 28.8 15.5 39.1 2.5 2.7 2.9 6.7 .9 9.7-4.7 7.4-7.4 16.1-7.4 25.5 0 21.6 14.3 39.9 34 45.9l1-24.8c-7.1-4.4-11.8-12.2-11.8-21.1 0-9.6 5.5-18 13.5-22.1l3.3-81.8c.2-4.3 3.7-7.7 8-7.7s7.8 3.4 8 7.7l3.3 81.8c8 4.1 13.5 12.4 13.5 22.1 0 8.9-4.7 16.7-11.8 21.1l1 24.8c19.6-6 33.9-24.1 34-45.6l0-.6c-.1-9.3-2.7-17.9-7.4-25.2-1.9-3.1-1.6-7.1 .9-9.7 9.6-10.2 15.5-23.9 15.5-39.1 0-10.8-3-20.9-8.2-29.5-1.9-3.2-1.4-7.2 1.2-9.8z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: book-journal-whills
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for book-journal-whills (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-book-journal-whills {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-book-journal-whills {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-book-journal-whills 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-book-journal-whills 3s ease-in-out infinite alternate;
}
</style>