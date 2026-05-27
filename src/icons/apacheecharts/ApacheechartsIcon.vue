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
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-.792 5.307c2.192-.025 4.366 1.134 5.43 3.304.909 1.852.878 3.61-.098 5.645-.477.995-.487 1.06-.241 1.578.214.452.727.779 1.221.779.454 0 1.15-.586 1.252-1.054.1-.454-.193-1.118-.607-1.377a10.11 10.11 0 0 1-.393-.255c-.129-.1.42-.38.741-.38.687 0 1.247.526 1.375 1.29.055.333.134.422.44.502.859.222 1.297 1.451.755 2.116-.22.27-.23.271-.305.042-.267-.801-.666-1.12-1.403-1.12-.319 0-.572.128-1.098.556-1.006.82-1.866 1.303-2.907 1.632-1.276.384-2.752.478-4.086.156-2.162-.431-4.232-2.11-5.252-4.257C4.758 11.782 5.135 9 7.033 7.077a5.924 5.924 0 0 1 4.175-1.77Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: apacheecharts
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for apacheecharts (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-apacheecharts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-apacheecharts {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-apacheecharts 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-apacheecharts 3s ease-in-out infinite alternate;
}
</style>