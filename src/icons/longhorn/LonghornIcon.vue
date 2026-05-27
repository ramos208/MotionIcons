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
      <path d="M21.46 2.172H2.54A2.55 2.55 0 0 0 0 4.712v14.575a2.55 2.55 0 0 0 2.54 2.54h18.92a2.55 2.55 0 0 0 2.54-2.54V4.713a2.55 2.55 0 0 0-2.54-2.54m.427 5.138-.31 2.1a1.24 1.24 0 0 1-.98 1.032l-5.024 1.003-.002.015-.787 4.306a2.474 2.474 0 0 1-2.467 2.34h-.634a2.474 2.474 0 0 1-2.468-2.355l-.697-4.288-5.115-1.021a1.24 1.24 0 0 1-.98-1.032l-.31-2.1a1.235 1.235 0 0 1 2.445-.36L4.74 8.19 12 9.639l7.26-1.45.182-1.24a1.235 1.235 0 0 1 2.445.36M12 12.134a1.2 1.2 0 0 1-.242-.024l-.653-.13.562 3.457a1 1 0 0 1 .016.198h.634a1.2 1.2 0 0 1 .02-.222l.63-3.448-.725.145a1.2 1.2 0 0 1-.242.024"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: longhorn
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for longhorn (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-longhorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-longhorn {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-longhorn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-longhorn 3s ease-in-out infinite alternate;
}
</style>