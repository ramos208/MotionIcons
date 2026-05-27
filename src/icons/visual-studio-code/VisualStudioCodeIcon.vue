<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M17.0158 16.5V21.282C17.0158 21.6025 16.8064 21.874 16.5174 21.9663M17.0158 16.5L10.8772 12M17.0158 16.5V7.5M7.74691 9.7053L4.25118 7.03035C3.85429 6.72665 3.29466 6.76425 2.94169 7.11833L2.2921 7.76997C1.89399 8.16933 1.90433 8.81995 2.31494 9.20638L5.28343 12M7.74691 9.7053L10.8772 12M7.74691 9.7053L15.8129 2.19186C15.9453 2.06854 16.1193 2 16.3 2C16.3758 2 16.4488 2.01181 16.5174 2.0337M10.8772 12L17.0158 7.5M17.0158 7.5V2.71803C17.0158 2.39749 16.8064 2.126 16.5174 2.0337M7.74691 14.2947L4.25118 16.9696C3.85429 17.2733 3.29466 17.2357 2.94169 16.8817L2.2921 16.23C1.89399 15.8307 1.90433 15.18 2.31494 14.7936L5.28343 12M7.74691 14.2947L15.8129 21.8081C15.9453 21.9315 16.1193 22 16.3 22C16.3758 22 16.4488 21.9882 16.5174 21.9663M7.74691 14.2947L5.28343 12M16.5174 2.0337L21.4111 4.23506C21.7695 4.39626 22.0001 4.75353 22.0001 5.14752V18.8525C22.0001 19.2465 21.7695 19.6037 21.4111 19.7649L16.5174 21.9663" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: visual-studio-code
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for visual-studio-code (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-visual-studio-code {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-visual-studio-code {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-visual-studio-code 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-visual-studio-code 2s ease-in-out infinite alternate;
}
</style>