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
      <path d="M6 9L6.73072 7.88715C8.5751 5.07821 9.4973 3.67374 10.684 3.23546C11.5341 2.92151 12.4659 2.92151 13.316 3.23546C14.5027 3.67374 15.4249 5.07821 17.2693 7.88714L18 8.99999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.7256 20.3049C17.6228 21 15.7485 21 12 21C8.25145 21 6.37718 21 5.27439 20.3049C3.79479 19.3723 2.92362 17.6532 3.00958 15.8357C3.00958 15.8357 2.80609 13.3536 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682M18.7256 20.3049C20.2052 19.3723 21.0764 17.6532 20.9904 15.8357C20.9904 15.8357 21.1939 13.3536 19.7252 11C18.3163 13.0751 13.6993 17.214 10.5006 17.1682M18.7256 20.3049C15.4906 20.2278 12.7105 18.8875 10.5006 17.1682" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.5 7C11.6667 7.33333 12.3 8 13.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 11L9.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.625 11.5H14.5M14.75 11.5C14.75 11.6381 14.6381 11.75 14.5 11.75C14.3619 11.75 14.25 11.6381 14.25 11.5C14.25 11.3619 14.3619 11.25 14.5 11.25C14.6381 11.25 14.75 11.3619 14.75 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rice-bowl02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rice-bowl02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rice-bowl02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rice-bowl02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rice-bowl02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rice-bowl02 3s ease-in-out infinite alternate;
}
</style>