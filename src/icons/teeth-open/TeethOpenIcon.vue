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
      <path d="M64 32C28.7 32 0 60.7 0 96l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80c0-35.3-28.7-64-64-64L64 32zm0 272c-35.3 0-64 28.7-64 64l0 48c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-48c0-35.3-28.7-64-64-64L64 304zm80-160c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zm128 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM80 112c17.7 0 32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24c0-17.7 14.3-32 32-32zm320 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24zM48 384l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm144 48c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm128 0c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm112-16c-17.7 0-32-14.3-32-32l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: teeth-open
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for teeth-open (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-teeth-open {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-teeth-open {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-teeth-open 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-teeth-open 3s ease-in-out infinite alternate;
}
</style>