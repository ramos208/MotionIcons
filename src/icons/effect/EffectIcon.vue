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
      <path d="M11.846.007a.8.8 0 0 0-.312.103L.454 6.346a.8.8 0 0 0-.397.855.8.8 0 0 0 .408.78L3.99 9.976 1.033 11.64a.76.76 0 0 0-.374.838c-.033.265.07.541.378.715l10.546 5.967a.8.8 0 0 0 .61.073.8.8 0 0 0 .27-.094l10.548-5.968c.31-.175.412-.454.376-.72a.76.76 0 0 0-.383-.79l-3.01-1.693 3.554-2.012a.8.8 0 0 0 .399-.836.8.8 0 0 0-.412-.753L12.455.13a.8.8 0 0 0-.28-.097.8.8 0 0 0-.227-.033m6.482 10.853 2.78 1.566-9.205 5.21-9.21-5.213 2.76-1.554 5.99 3.387a.83.83 0 0 0 .638.076.8.8 0 0 0 .285-.098zm3.572 6.03a.75.75 0 0 0-.35.098l-9.67 5.47-9.635-5.45a.75.75 0 0 0-1.01.267.717.717 0 0 0 .27.99l9.976 5.644a.75.75 0 0 0 .372.098c.079 0 .294-.026.46-.117l9.978-5.645a.716.716 0 0 0 .27-.99.75.75 0 0 0-.661-.364"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: effect
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for effect (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-effect {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-effect {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-effect 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-effect 3s ease-in-out infinite alternate;
}
</style>