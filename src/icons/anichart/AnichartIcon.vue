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
      <path d="M17.293 2.951a9 9 0 0 0-5.162 1.62l1.572 4.483a4.68 4.68 0 0 1 3.596-1.706c1.068 0 2.113.364 2.935 1.045.51.41.957.487 1.468.07l1.837-1.438c.552-.44.622-.98.135-1.467a9.12 9.12 0 0 0-6.38-2.607M6.3 3.127 0 21.05h4.89l1.068-3.1h5.33l1.04 3.1h4.871L10.92 3.127Zm2.3 5.882 1.674 4.966h-3.2Zm12.386 6.318c-.272-.014-.544.103-.845.327-.81.646-1.808.98-2.841.98q-.502 0-.976-.102l1.58 4.508a9.13 9.13 0 0 0 5.583-2.421c.517-.494.446-1.057-.058-1.497l-1.797-1.515c-.223-.18-.434-.27-.646-.28"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: anichart
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for anichart (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-anichart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-anichart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-anichart 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-anichart 3s ease-in-out infinite alternate;
}
</style>