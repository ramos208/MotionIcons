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
      <path d="M1.563 0v6.92h2.083c.818 0 1.227-.434 1.227-1.289V3.264h10.391c3.035 0 4.552 1.613 4.552 4.736v2.575H4.873v1.562c0 .851-.412 1.288-1.227 1.288H.827v4.23C.827 21.885 2.942 24 7.218 24h8.46c4.965 0 7.494-2.575 7.494-7.678V7.678C23.172 2.575 20.643 0 15.678 0zm8.706 13.425h2.246c1.513 0 2.089.777 2.089 2.226v3.389c0 1.15-.577 1.747-1.705 1.747h-1.16c-.976 0-1.47-.578-1.47-1.726v-5.636"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: metager
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for metager (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-metager {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-metager {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-metager 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-metager 3s ease-in-out infinite alternate;
}
</style>