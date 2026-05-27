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
      <path d="M12 6L12.9536 9.85977C13.119 10.5295 13.72 11 14.4098 11H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 6H13.0689C14.6176 6 15.3919 6 16.0484 6.34597C16.705 6.69194 17.1427 7.33069 18.0182 8.60818C18.6321 9.50396 19.2765 10.1542 20.1826 10.7326C21.0949 11.315 21.5287 11.5996 21.7694 12.0566C22 12.4942 22 13.0125 22 14.049C22 15.4156 22 16.0989 21.5875 16.5331C21.5699 16.5517 21.5517 16.5699 21.5331 16.5875C21.0989 17 20.4156 17 19.049 17M5 17C4.67926 17 4.38501 17 4.22939 16.9666C4.07377 16.9332 3.92752 16.8674 3.63503 16.7358L2 16C2 12.8056 2.47904 10.9623 3.10557 9.44992C3.5164 8.45825 3.72182 7.96241 3.63686 7.52064C3.5519 7.07887 2.5 6 2.5 6M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: van
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for van (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-van {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-van {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-van 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-van 3s ease-in-out infinite alternate;
}
</style>