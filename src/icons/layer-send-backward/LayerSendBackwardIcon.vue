<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M15.8899 12.5L19.2873 10.9394C21.0958 10.1086 22 9.69326 22 9C22 8.30674 21.0958 7.89137 19.2873 7.06064L14.3943 4.81298C13.2144 4.27099 12.6245 4 12 4C11.3755 4 10.7856 4.27099 9.60573 4.81298L4.7127 7.06064C2.90423 7.89137 2 8.30674 2 9C2 9.69326 2.90423 10.1086 4.7127 10.9394L8.11012 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 19.5V9M15 17C14.4102 17.6068 12.8403 20 12 20C11.1597 20 9.58984 17.6068 9 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: layer-send-backward
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for layer-send-backward (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-layer-send-backward {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-layer-send-backward {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-layer-send-backward 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-layer-send-backward 3s ease-in-out infinite alternate;
}
</style>