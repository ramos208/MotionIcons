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
      <path d="M480-16c6.9 0 13 4.4 15.2 10.9l13.5 40.4 40.4 13.5C555.6 51 560 57.1 560 64s-4.4 13-10.9 15.2l-40.4 13.5-13.5 40.4C493 139.6 486.9 144 480 144s-13-4.4-15.2-10.9l-13.5-40.4-40.4-13.5C404.4 77 400 70.9 400 64s4.4-13 10.9-15.2l40.4-13.5 13.5-40.4C467-11.6 473.1-16 480-16zM321.4 97.4c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3l-10.9 10.9c7.9 22 12.2 45.7 12.2 70.5 0 114.9-93.1 208-208 208S32 418.9 32 304 125.1 96 240 96c24.7 0 48.5 4.3 70.5 12.3l10.9-10.9zM144 304c0-53 43-96 96-96 13.3 0 24-10.7 24-24s-10.7-24-24-24c-79.5 0-144 64.5-144 144 0 13.3 10.7 24 24 24s24-10.7 24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bomb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bomb (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bomb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bomb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bomb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bomb 3s ease-in-out infinite alternate;
}
</style>