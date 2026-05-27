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
      <path d="M352 512L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-66.7C13.4 374.7 0 356.9 0 336L0 48C0 21.5 21.5 0 48 0L352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96zm32-96c0-17.7-14.3-32-32-32l-256 0 0 64 256 0c17.7 0 32-14.3 32-32zM113.9 229c-1.2 2-1.9 4.2-1.9 6.6 0 6.9 5.6 12.5 12.5 12.5l56.9 0 30.5 49.2c2.6 4.2 7.2 6.8 12.2 6.8s9.6-2.6 12.2-6.8l30.5-49.2 56.9 0c6.9 0 12.5-5.6 12.5-12.5 0-2.3-.6-4.6-1.9-6.6l-27.8-45 27.8-45c1.2-2 1.9-4.2 1.9-6.6 0-6.9-5.6-12.5-12.5-12.5l-56.9 0-30.5-49.2C233.6 66.6 229 64 224 64s-9.6 2.6-12.2 6.8l-30.5 49.2-56.9 0c-6.9 0-12.5 5.6-12.5 12.5 0 2.3 .6 4.6 1.9 6.6l27.8 45-27.8 45z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: book-tanakh
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for book-tanakh (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-book-tanakh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-book-tanakh {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-book-tanakh 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-book-tanakh 3s ease-in-out infinite alternate;
}
</style>