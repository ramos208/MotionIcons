<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12.016.86c-2.676-.004-5.353.182-6.002.562C4.714 2.182.002 10.46 0 11.984c-.002 1.525 4.69 9.813 5.986 10.577 1.297.764 10.701.778 12 .017 1.3-.76 6.012-9.038 6.014-10.562.002-1.525-4.69-9.813-5.986-10.577-.649-.382-3.323-.576-5.998-.58zm-.268 4.363h2.38c.85 0 1.534.682 1.534 1.53V9.23a1.53 1.53 0 0 1-1.533 1.533h-2.381c-.127 0-.25-.018-.367-.047l.002.047v2.476l-.002.047c.117-.029.24-.047.367-.047h2.38a1.53 1.53 0 0 1 1.534 1.533v2.475c0 .849-.684 1.531-1.533 1.531h-2.381a1.529 1.529 0 0 1-1.533-1.53V14.77l.002-.046a1.538 1.538 0 0 1-.365.045H7.469a1.527 1.527 0 0 1-1.532-1.532v-2.476c0-.849.683-1.532 1.532-1.532h2.383c.126 0 .248.017.365.045l-.002-.046V6.754c0-.849.684-1.531 1.533-1.531z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cloudron
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for cloudron (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cloudron {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cloudron {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cloudron 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cloudron 3s ease-in-out infinite alternate;
}
</style>