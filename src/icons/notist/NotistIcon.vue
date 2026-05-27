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
      <path d="M5.9327 3.8008c-1.099.11-2.288.4-3.038.74-1.069.499-1.259.869-.909 1.868.36 1.0401.19 2.3081-1.0001 7.5053-.878 3.876-1.027 4.686-.977 5.406.04.47.09.63.29.7901.22.179.33.189 1.688.129 3.408-.17 4.0571-.22 4.2671-.34.24-.13.25-.2.44-1.758.32-2.8681 1.788-7.1552 3.027-8.8942 1.0601-1.479 2.3591-2.128 3.0982-1.549.78.62.76 1.559-.13 4.147-.68 1.999-.79 2.428-.909 3.617-.15 1.4601.13 2.4891.96 3.4082.849.94 2.118 1.409 3.846 1.409 1.64 0 2.9681-.41 4.3771-1.339 1.29-.86 2.8281-2.608 3.0081-3.4281.1-.41-.07-.859-.35-.969-.41-.15-.65-.04-1.389.63-.859.78-1.249.949-2.008.889-1.0101-.08-1.4501-.66-1.4501-1.919 0-.899.09-1.349.65-3.3171.79-2.728.93-3.9671.58-5.0271-.57-1.768-2.978-2.538-5.6461-1.798-1.449.41-3.238 1.449-4.5971 2.688-.38.34-.68.59-.68.56 0-.02.07-.35.16-.72.34-1.499.2-2.248-.479-2.598-.39-.2-1.599-.26-2.8281-.13z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: notist
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for notist (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-notist {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-notist {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-notist 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-notist 3s ease-in-out infinite alternate;
}
</style>