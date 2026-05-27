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
      <path d="M12 21.5V7M15 19C14.4102 19.6068 12.8403 22 12 22C11.1597 22 9.58984 19.6068 9 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.2327 11.5C21.4109 12.062 22 12.4405 22 13.0001C22 13.6934 21.0958 14.1087 19.2873 14.9395L15.8901 16.5M3.76727 11.5C2.58909 12.062 2 12.4405 2 13.0001C2 13.6934 2.90423 14.1087 4.7127 14.9395L8.1099 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.11012 10.5L4.7127 8.93936C2.90423 8.10863 2 7.69326 2 7C2 6.30674 2.90423 5.89137 4.7127 5.06064L9.60573 2.81298C10.7856 2.27099 11.3755 2 12 2C12.6245 2 13.2144 2.27099 14.3943 2.81298L19.2873 5.06064C21.0958 5.89137 22 6.30674 22 7C22 7.69326 21.0958 8.10863 19.2873 8.93937L15.8899 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: layer-send-to-back
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for layer-send-to-back (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-layer-send-to-back {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-layer-send-to-back {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-layer-send-to-back 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-layer-send-to-back 3s ease-in-out infinite alternate;
}
</style>