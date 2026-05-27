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
      <path d="M13.4572 5.40692L9.5343 3.33293C7.52036 2.26817 6.51339 1.73579 5.75669 2.12971C5 2.52362 5 3.58019 5 5.69334V7.76734C5 9.05553 5 9.69962 5.44155 10.0998C5.8831 10.5 6.59376 10.5 8.01508 10.5H11.9379C16.4249 10.5 18.6683 10.5 18.9695 9.49025C19.2707 8.48051 17.3329 7.45598 13.4572 5.40692Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.4572 18.5931L9.5343 20.6671C7.52036 21.7318 6.51339 22.2642 5.75669 21.8703C5 21.4764 5 20.4198 5 18.3067V16.2327C5 14.9445 5 14.3004 5.44155 13.9002C5.8831 13.5 6.59376 13.5 8.01508 13.5H11.9379C16.4249 13.5 18.6683 13.5 18.9695 14.5097C19.2707 15.5195 17.3329 16.544 13.4572 18.5931Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: image-flip-vertical
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for image-flip-vertical (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-image-flip-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-image-flip-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-image-flip-vertical 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-image-flip-vertical 3s ease-in-out infinite alternate;
}
</style>