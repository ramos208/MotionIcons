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
      <path d="M329.7 448c-5.1 0-9.7 3.7-9.7 8.8l0 7.2c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-63.6c0-12.6-5.1-24.5-13.1-34.2-31.8-38.7-50.9-88.2-50.9-142.2 0-123.7 100.3-224 224-224 112.7 0 206 83.3 221.7 191.7 .4 3 1.7 5.9 3.6 8.3l35.8 42.9c7 8.4 10.9 19.1 10.9 30.1 0 25.9-21 47-47 47l-1 0c-8.8 0-16 7.2-16 16l0 48c0 35.3-28.7 64-64 64l-38.3 0zM224 64c-13.3 0-24 10.7-24 24 0 22.9-27.7 34.4-43.9 18.2-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c16.2 16.2 4.7 43.9-18.2 43.9-13.3 0-24 10.7-24 24s10.7 24 24 24c22.9 0 34.4 27.7 18.2 43.9-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c16.2-16.2 43.9-4.7 43.9 18.2 0 13.3 10.7 24 24 24s24-10.7 24-24c0-22.9 27.7-34.4 43.9-18.2 9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-16.2-16.2-4.7-43.9 18.2-43.9 13.3 0 24-10.7 24-24s-10.7-24-24-24c-22.9 0-34.4-27.7-18.2-43.9 9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-16.2 16.2-43.9 4.7-43.9-18.2 0-13.3-10.7-24-24-24zm-32 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: head-side-virus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for head-side-virus (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-head-side-virus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-head-side-virus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-head-side-virus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-head-side-virus 3s ease-in-out infinite alternate;
}
</style>