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
      <path d="m -3e-4,9.3955 4.187,-4.187 4.1869,4.187 -4.187,4.187 z m 0,10.417 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z m 5.2086,-5.2085 4.1869,-4.187 4.187,4.187 -4.187,4.187 z m 0,-10.417 L 9.3953,0 13.5822,4.187 9.3952,8.3738 Z m 5.2085,5.2084 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z M 15.6253,4.187 19.8123,0 l 4.1869,4.187 -4.187,4.1869 z m -5.208,15.626 4.187,-4.1869 4.1869,4.187 L 14.6042,24 Z m 5.2086,-5.2085 4.187,-4.187 4.1868,4.187 -4.1869,4.187 z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mingww64
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mingww64 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mingww64 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mingww64 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mingww64 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mingww64 3s ease-in-out infinite alternate;
}
</style>