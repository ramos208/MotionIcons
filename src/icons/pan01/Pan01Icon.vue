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
      <path d="M19.8033 14.8033C16.8744 17.7322 12.1256 17.7322 9.1967 14.8033C6.26777 11.8744 6.26777 7.12563 9.1967 4.1967C12.1256 1.26777 16.8744 1.26777 19.8033 4.1967C22.7322 7.12563 22.7322 11.8744 19.8033 14.8033Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.3284 12.3284C15.7663 13.8905 13.2337 13.8905 11.6716 12.3284C10.1095 10.7663 10.1095 8.23367 11.6716 6.67157C13.2337 5.10948 15.7663 5.10948 17.3284 6.67157C18.8905 8.23367 18.8905 10.7663 17.3284 12.3284Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 15.9707C8.26829 16.7441 7.48472 19.486 5.58597 21.3847C4.76563 22.2051 3.43559 22.2051 2.61525 21.3847C1.79492 20.5644 1.79492 19.2344 2.61525 18.414C4.514 16.5153 7.25588 15.7317 8.02929 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pan01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pan01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pan01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pan01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pan01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pan01 3s ease-in-out infinite alternate;
}
</style>