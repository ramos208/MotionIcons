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
      <path d="M640 388.3c0 16.9-7.1 32.2-18.4 43.1l-35-23.3-292.7-195.1c-36.1-24.1-78.6-36.9-122-36.9l-3.9 0c-2.7 0-5.4 0-8 .1l22.2-100c5.7-25.8 28.6-44.1 55-44.1 12.2 0 24.1 4 33.8 11.3l4.7 3.5c26.3 19.7 62.4 19.7 88.6 0l4.7-3.5c9.8-7.3 21.6-11.3 33.8-11.3 26.4 0 49.3 18.3 55 44.1l33 148.5C574.5 232.3 640 302.6 640 388.3zM171.9 224c33.9 0 67.1 10 95.4 28.9L560 448 56 448c-30.9 0-56-25.1-56-56 0-92.8 75.2-168 168-168l3.9 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hat-cowboy-side
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hat-cowboy-side (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hat-cowboy-side {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hat-cowboy-side {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hat-cowboy-side 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hat-cowboy-side 3s ease-in-out infinite alternate;
}
</style>