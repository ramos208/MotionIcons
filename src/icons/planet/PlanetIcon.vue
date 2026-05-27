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
      <path d="M12.891 6.582c-1.159 0-2.4.457-3.217 1.633h-.033a1.59 1.59 0 0 0-1.59-1.59h-.048v10.86a1.792 1.792 0 0 0 1.784 1.784v-4.703h.034c.343.571 1.29 1.536 3.185 1.536 2.857 0 4.572-2.352 4.572-4.638.002-2.416-1.616-4.882-4.687-4.882zm-.066 7.975c-1.714 0-3.07-1.388-3.07-3.217 0-1.666 1.242-3.2 3.023-3.2 1.845 0 3.103 1.616 3.103 3.233-.001 1.905-1.455 3.184-3.056 3.184zM12.001 24A12 12 0 1 1 24 12.001 12.013 12.013 0 0 1 12.001 24zm0-22.856a10.861 10.861 0 1 0 10.861 10.862 10.87 10.87 0 0 0-10.86-10.862z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: planet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for planet (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-planet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-planet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-planet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-planet 3s ease-in-out infinite alternate;
}
</style>