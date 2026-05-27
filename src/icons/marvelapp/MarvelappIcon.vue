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
      <path d="M10.339 8.13c1.373 0-1.162 7.076-.845 10.138.317 3.063 3.696 2.218 3.485.423-.423-3.063 1.69-12.672 3.696-12.672 1.478 0-1.69 6.547-1.056 10.665.422 2.64 4.012 1.901 3.59.106-1.162-5.386 2.64-10.56 2.112-14.361C21.11.845 20.159 0 19.209 0c-3.379 0-6.125 6.97-6.125 6.97s.423-3.908-2.428-4.119C6.643 2.64 2.525 12.777 2.63 21.964c.106 2.957 3.696 2.429 3.485.106-.211-4.12 2.112-13.94 4.225-13.94z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: marvelapp
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for marvelapp (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-marvelapp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-marvelapp {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-marvelapp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-marvelapp 3s ease-in-out infinite alternate;
}
</style>