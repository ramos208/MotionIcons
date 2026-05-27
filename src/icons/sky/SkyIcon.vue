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
      <path d="M7.387 13.656c0 1.423-.933 2.454-2.823 2.675-1.35.147-3.337-.025-4.294-.148-.025-.147-.074-.343-.074-.49 0-1.252.663-1.522 1.3-1.522.664 0 1.694.123 2.455.123.834 0 1.104-.295 1.104-.565 0-.368-.343-.515-1.006-.638l-1.767-.343C.785 12.453 0 11.423 0 10.343c0-1.325.933-2.454 2.798-2.65 1.398-.148 3.116.024 4.049.122.024.172.049.32.049.491 0 1.252-.663 1.522-1.276 1.522-.491 0-1.227-.099-2.086-.099-.884 0-1.227.246-1.227.54 0 .32.343.442.883.54l1.718.32c1.742.294 2.479 1.3 2.479 2.527m3.092 1.521c0 .761-.295 1.203-1.792 1.203-.196 0-.368-.025-.54-.05V6.22c0-.76.27-1.57 1.767-1.57.196 0 .393.024.565.049zm6.085 3.927c.197.098.59.22 1.105.245.859.025 1.325-.319 1.693-1.08L24 7.913a2.5 2.5 0 0 0-.957-.22c-.589 0-1.399.122-1.914 1.325l-1.497 3.534-2.945-4.81c-.196-.05-.662-.148-1.006-.148-1.03 0-1.62.393-2.233 1.031l-2.871 3.141 2.306 3.632c.418.663.982 1.006 1.89 1.006.589 0 1.104-.147 1.325-.245l-2.773-4.196 1.963-2.086 3.24 5.08Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sky
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sky (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sky {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sky {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sky 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sky 3s ease-in-out infinite alternate;
}
</style>