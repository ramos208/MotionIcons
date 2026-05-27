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
      <path d="M23.179.818C15.533-.273 8.406-.273.8.818-.266 8.377-.266 15.424.8 22.946 4.511 23.491 8.22 24 12.005 24c3.748 0 7.459-.51 11.17-1.017 1.1-7.56 1.1-14.607 0-22.165h.004zm-11.54 18.314c-2.055 0-4.226-.689-5.179-1.199l.807-3.126c1.064.705 2.682 1.395 4.446 1.395 1.395 0 2.24-.436 2.24-1.305 0-.615-.435-.975-1.575-1.26l-2.279-.631c-2.416-.66-3.557-1.891-3.557-3.855 0-2.365 1.83-4.256 5.619-4.256 1.99 0 3.973.545 5.07 1.092l-.951 2.976c-1.104-.615-2.79-1.125-4.226-1.125-1.365 0-1.95.436-1.95 1.092 0 .619.404.87 1.291 1.092l2.488.734c2.566.736 3.707 1.966 3.707 3.885-.076 2.701-2.461 4.517-5.957 4.517l.006-.026z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sellfy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sellfy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sellfy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sellfy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sellfy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sellfy 3s ease-in-out infinite alternate;
}
</style>