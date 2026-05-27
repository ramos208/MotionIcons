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
      <path d="M192 0c17.7 0 32 14.3 32 32 0 30.5 36.9 45.8 58.5 24.2 12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-21.6 21.6-6.3 58.5 24.2 58.5 17.7 0 32 14.3 32 32s-14.3 32-32 32c-30.5 0-45.8 36.9-24.2 58.5 12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0c-21.6-21.6-58.5-6.3-58.5 24.2 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-30.5-36.9-45.8-58.5-24.2-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3C77.8 260.9 62.5 224 32 224 14.3 224 0 209.7 0 192s14.3-32 32-32c30.5 0 45.8-36.9 24.2-58.5-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0C123.1 77.8 160 62.5 160 32 160 14.3 174.3 0 192 0zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm248 40c0 22.9 27.7 34.4 43.9 18.2 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-16.2 16.2-4.7 43.9 18.2 43.9 13.3 0 24 10.7 24 24s-10.7 24-24 24c-22.9 0-34.4 27.7-18.2 43.9 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-16.2-16.2-43.9-4.7-43.9 18.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-22.9-27.7-34.4-43.9-18.2-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c16.2-16.2 4.7-43.9-18.2-43.9-13.3 0-24-10.7-24-24s10.7-24 24-24c22.9 0 34.4-27.7 18.2-43.9-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16.2 16.2 43.9 4.7 43.9-18.2 0-13.3 10.7-24 24-24s24 10.7 24 24zM504 384a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: viruses
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for viruses (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-viruses {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-viruses {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-viruses 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-viruses 3s ease-in-out infinite alternate;
}
</style>