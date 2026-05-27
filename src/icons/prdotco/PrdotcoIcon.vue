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
      <path d="M11.9998 4.67c1.876-.0025 3.7518.7157 5.1832 2.1468 1.026 1.0238 1.6037 2.1895 1.898 3.2853l1.7906-1.7905c.7157-.7157 1.8761-.7157 2.5916 0 .7157.7155.7157 1.8758 0 2.5913l-6.2802 6.2803c-1.4314 1.4314-3.3073 2.1469-5.1832 2.1469-1.8758 0-3.7517-.7155-5.1831-2.147-.9442-.944-1.5768-2.0815-1.898-3.2848L3.128 15.6886c-.7154.716-1.8758.716-2.5915 0-.7153-.7154-.7153-1.8758 0-2.5915 2.092-2.0933 4.1908-4.1889 5.9512-5.9502 1.6938-1.8595 3.7695-2.4746 5.5121-2.477zm2.5918 4.7384c-1.4314-1.4312-3.7521-1.4312-5.1834 0-1.4313 1.4312-1.4313 3.7522 0 5.1834 1.4313 1.4312 3.7518 1.431 5.1831-.0002 1.4313-1.4312 1.4313-3.752.0003-5.1832z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prdotco
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prdotco (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prdotco {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prdotco {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prdotco 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prdotco 3s ease-in-out infinite alternate;
}
</style>