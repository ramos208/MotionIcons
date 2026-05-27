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
      <path d="M4.204 18.089V12.66q0-2.477 1.156-3.947 1.156-1.47 3.108-1.47.494 0 1.03.092.54.088.953.245V5.976q-.279-.122-.754-.195-.478-.073-1.007-.073-1.76 0-2.902.88-1.144.881-1.458 2.497h-.157V6.01H0v1.186h2.737V18.09Zm-3.959 0H8.04v-1.187H.245ZM19.1 7.109q1.604 0 2.507 1.095.904 1.091.904 3.02H15.6q0-1.94.93-3.027.93-1.088 2.569-1.088zm4.846 7.998h-1.458q-.28.884-1.133 1.378-.854.494-2.087.494-1.68 0-2.676-1.114-.991-1.118-.991-3.013v-.414H24v-.953q0-1.807-.578-3.074-.574-1.267-1.67-1.933-1.094-.67-2.652-.67-1.493 0-2.615.658-1.118.655-1.738 1.838-.617 1.183-.617 2.775v1.761q0 2.58 1.352 4.016 1.351 1.436 3.786 1.436 1.221 0 2.205-.394.98-.39 1.627-1.11.643-.717.846-1.681z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: remark
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for remark (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-remark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-remark {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-remark 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-remark 3s ease-in-out infinite alternate;
}
</style>