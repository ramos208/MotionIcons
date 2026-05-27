<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M23.848 8.166c.75-3.536-1.287-7.264-5.747-7.264h-6.955l-1.152 5.4h5.246c1.076 0 1.748.884 1.517 1.941-.23 1.076-1.267 1.903-2.344 1.903H9.11l7.111 13.143h7.437l-4.806-8.82c1.288-.692 4.21-2.632 4.997-6.303zM1.23 17.505 0 23.31h6.342l2.767-13.145c-3.863.135-6.9 2.71-7.88 7.34zM5.4 6.648a2.985 2.985 0 0 0 2.997-2.98A2.986 2.986 0 0 0 5.4.69a2.986 2.986 0 0 0-2.998 2.98c0 1.633 1.346 2.978 2.998 2.978z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: irobot
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for irobot (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-irobot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-irobot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-irobot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-irobot 2s ease-in-out infinite alternate;
}
</style>