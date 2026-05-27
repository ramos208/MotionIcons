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
      <path d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM53.92,34.62A8,8,0,1,0,42.08,45.38L80,87.09V224a8,8,0,0,0,16,0V104.69l24,26.4V192a8,8,0,0,0,16,0V148.69l66.08,72.69a8,8,0,1,0,11.84-10.76ZM88,44.43a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v4.43A8,8,0,0,0,88,44.43Zm40,44a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V80.43A8,8,0,0,0,128,88.43Zm40,44a8,8,0,0,0,8-8V96a8,8,0,0,0-16,0v28.43A8,8,0,0,0,168,132.43ZM208,72a8,8,0,0,0-8,8v88.43a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: waveform-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for waveform-slash (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-waveform-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-waveform-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-waveform-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-waveform-slash 3s ease-in-out infinite alternate;
}
</style>