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
      <path d="M1.685 0v.357l1.232 1.046c1.477 1.204 1.67 1.439 1.67 2.526V24h8.646c4.537 0 9.083-1.629 9.083-6.849 0-3.082-2.174-5.458-5.186-5.797v-.067c2.475-.745 4.169-2.54 4.169-5.253 0-4.372-3.73-6.032-7.349-6.032L1.686 0zm7.176 3.664h3.524c2.383 0 3.121.327 3.844 1.013.548.521.799 1.237.801 2.07 0 .775-.267 1.466-.831 2.004-.705.676-1.674 1.011-3.443 1.011H8.862V3.664zm0 9.758h4.099c3.456 0 5.085.881 5.085 3.39 0 3.153-3.055 3.526-5.256 3.526H8.86v-6.916z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bitdefender
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bitdefender (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bitdefender {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bitdefender {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bitdefender 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bitdefender 3s ease-in-out infinite alternate;
}
</style>