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
      <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM416 184l0 144c0 13.3-10.7 24-24 24-7.1 0-13.5-3.1-17.9-8-10.2 5.1-21.8 8-34.1 8-42 0-76-34-76-76s34-76 76-76c9.9 0 19.3 1.9 28 5.3l0-21.3c0-13.3 10.7-24 24-24s24 10.7 24 24zm-48 92a28 28 0 1 0 -56 0 28 28 0 1 0 56 0zM160 208c-8.8 0-16 7.2-16 16l0 32 48 0 0-32c0-8.8-7.2-16-16-16l-16 0zm32 96l-48 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-35.3 28.7-64 64-64l16 0c35.3 0 64 28.7 64 64l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rectangle-ad
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rectangle-ad (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rectangle-ad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rectangle-ad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rectangle-ad 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rectangle-ad 3s ease-in-out infinite alternate;
}
</style>