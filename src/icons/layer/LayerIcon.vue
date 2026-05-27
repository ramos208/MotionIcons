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
      <path d="M9.60573 4.81298C10.7856 4.27099 11.3755 4 12 4C12.6245 4 13.2144 4.27099 14.3943 4.81298L19.2873 7.06064C21.0958 7.89137 22 8.30674 22 9C22 9.69326 21.0958 10.1086 19.2873 10.9394L14.3943 13.187C13.2144 13.729 12.6245 14 12 14C11.3755 14 10.7856 13.729 9.60573 13.187L4.7127 10.9394C2.90423 10.1086 2 9.69326 2 9C2 8.30674 2.90423 7.89137 4.7127 7.06064L9.60573 4.81298Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.2327 13.5C21.4109 14.062 22 14.4405 22 15.0001C22 15.6934 21.0958 16.1087 19.2873 16.9395L14.3943 19.1871C13.2144 19.7291 12.6245 20.0001 12 20.0001C11.3755 20.0001 10.7856 19.7291 9.60573 19.1871L4.7127 16.9395C2.90423 16.1087 2 15.6934 2 15.0001C2 14.4405 2.58909 14.062 3.76727 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: layer
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for layer (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-layer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-layer {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-layer 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-layer 3s ease-in-out infinite alternate;
}
</style>