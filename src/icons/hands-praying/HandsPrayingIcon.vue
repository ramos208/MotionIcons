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
      <path d="M224 296c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112.6 88.2-119.7c13.1-17.8 9.3-42.8-8.5-55.9s-42.8-9.3-55.9 8.5L106.5 142.9C89.3 166.2 80 194.5 80 223.6l0 110.7-58.1 19.4C8.8 358 0 370.2 0 384l0 96c0 10 4.7 19.5 12.7 25.5s18.4 8 28.1 5.2l154.4-44.1c55-15.7 92.8-65.9 92.8-123.1L288 224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 72zm192 0l0-72c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 119.6c0 57.2 37.9 107.4 92.8 123.1l154.4 44.1c9.7 2.8 20 .8 28.1-5.2S640 490 640 480l0-96c0-13.8-8.8-26-21.9-30.4l-58.1-19.4 0-110.7c0-29-9.3-57.3-26.5-80.7L440.2 16.3C427.1-1.5 402.1-5.3 384.3 7.8s-21.6 38.1-8.5 55.9L464 183.4 464 296c0 13.3-10.7 24-24 24s-24-10.7-24-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hands-praying
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hands-praying (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hands-praying {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hands-praying {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hands-praying 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hands-praying 3s ease-in-out infinite alternate;
}
</style>