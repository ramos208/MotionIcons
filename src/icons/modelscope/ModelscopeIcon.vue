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
      <path d="M2.667 5.333V8H0v5.333h2.667v-2.666H.5V8.5h2.166v2.166h2.666V8H8V5.333Zm0 8v5.334H8V16H5.333v-2.667Zm13.333-8V8h2.667v2.667h2.666V8.5H23.5v2.166h-2.166v2.666H24V8h-2.667V5.333Zm5.333 8h-2.666V16H16v2.667h5.333zM8 10.667v2.666h2.667v-2.666zm2.667 2.666V16h2.666v-2.667zm2.666 0H16v-2.666h-2.667z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: modelscope
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for modelscope (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-modelscope {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-modelscope {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-modelscope 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-modelscope 3s ease-in-out infinite alternate;
}
</style>