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
      <path d="M16.838 6.377a3.624 3.624 0 0 0-.833.086c-1.696.375-2.56 1.674-2.535 3.027.022 1.328-.592 2.51-1.911 2.663-1.28.154-1.861-.835-1.946-2.009-.083-1.159-.875-2.076-2.099-1.802-1.044.227-1.785 1.163-1.846 2.339-.065 1.22-.547 2.24-1.425 2.343-.841.097-1.261-.933-1.317-1.75-.054-.803-.453-1.822-1.497-1.59C.446 9.9.017 11.128.001 11.94c-.017.82.333 1.914 1.27 1.853.726-.048 1.275.636 1.291 1.67.014 1.008.568 2.16 1.665 2.162 1.16 0 1.799-.982 1.828-2.366.027-1.2.757-2.06 1.555-2.147.827-.087 1.588.635 1.674 1.957.091 1.344.77 2.517 2.568 2.517 1.947 0 2.457-1.477 2.421-2.889-.036-1.397 1.03-2.367 2.318-2.544 1.404-.192 2.862-1.246 2.687-3.382-.138-1.701-1.242-2.374-2.44-2.393zm3.999 5.638a3.909 3.909 0 0 0-.318.02c-1.6.16-2.762 1.27-2.644 2.893.12 1.65 1.47 2.679 3.133 2.679 1.769 0 3.165-1.154 2.975-2.992-.178-1.69-1.571-2.632-3.146-2.6Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: walkman
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for walkman (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-walkman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-walkman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-walkman 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-walkman 3s ease-in-out infinite alternate;
}
</style>