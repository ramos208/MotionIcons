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
      <path d="M9.57959 6.29516C10.5332 7.65364 11.01 8.33288 11.6564 8.46522C11.8828 8.51159 12.1172 8.51159 12.3436 8.46522C12.99 8.33288 13.4668 7.65364 14.4204 6.29516C15.5752 4.65002 16.1527 3.82745 15.9652 3.15323C15.9002 2.91938 15.7784 2.70324 15.6096 2.52214C15.1229 2 14.0819 2 12 2C9.9181 2 8.87715 2 8.39045 2.52214C8.22164 2.70324 8.09984 2.91938 8.03482 3.15323C7.84734 3.82745 8.42476 4.65003 9.57959 6.29516Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.4204 17.7048C13.4668 16.3464 12.99 15.6671 12.3436 15.5348C12.1172 15.4884 11.8828 15.4884 11.6564 15.5348C11.01 15.6671 10.5332 16.3464 9.57959 17.7048C8.42475 19.35 7.84734 20.1725 8.03482 20.8468C8.09984 21.0806 8.22164 21.2968 8.39045 21.4779C8.87715 22 9.9181 22 12 22C14.0819 22 15.1229 22 15.6095 21.4779C15.7784 21.2968 15.9002 21.0806 15.9652 20.8468C16.1527 20.1725 15.5752 19.35 14.4204 17.7048Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 12H14M17.5 12H21M3 12H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flip-vertical
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flip-vertical (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flip-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flip-vertical {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flip-vertical 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flip-vertical 3s ease-in-out infinite alternate;
}
</style>