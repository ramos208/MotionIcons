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
      <path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-183.4-183.4 7.1-7.7 127.3 0c30.9 0 56-25.1 56-56s-25.1-56-56-56L392.7 200 233.5 26.4C227.5 19.8 218.9 16 209.9 16l-43.7 0c-10.9 0-18.6 10.7-15.2 21.1L175.1 109.2 41-24.9zM130.2 200l-24.6 0-52.8-66c-3-3.8-7.6-6-12.5-6l-19.8 0c-10.4 0-18 9.8-15.5 19.9L32 256 5 364.1C2.4 374.2 10.1 384 20.5 384l19.8 0c4.9 0 9.5-2.2 12.5-6l52.8-66 99.7 0-54.3 162.9c-3.5 10.4 4.3 21.1 15.2 21.1l43.7 0c9 0 17.5-3.8 23.6-10.4L320.7 390.5 130.2 200z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plane-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plane-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plane-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plane-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plane-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plane-slash 3s ease-in-out infinite alternate;
}
</style>