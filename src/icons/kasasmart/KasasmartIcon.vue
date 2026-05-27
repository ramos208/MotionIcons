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
      <path d="M12 0c-.5 0-1 .25-1.5.75L7.97 3.28l8.83 8.83c1 1 1.5 2 1.5 3V24h3.3c1.6 0 2.4-.8 2.4-2.4v-8.85c0-1-.5-2-1.5-3l-9-9C13 .25 12.5 0 12 0zM6.9 4.34L2.89 8.37 9.6 15.1c1 1 1.5 2 1.5 3V24h5.7v-8.89c-.03-.83-.6-1.46-1.06-1.94L6.91 4.34zm-5.08 5.1l-.32.31c-1 1-1.5 2-1.5 3v8.85C0 23.2.8 24 2.4 24h7.2v-5.9c-.03-.8-.56-1.42-1.06-1.95Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kasasmart
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kasasmart (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kasasmart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kasasmart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kasasmart 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kasasmart 3s ease-in-out infinite alternate;
}
</style>