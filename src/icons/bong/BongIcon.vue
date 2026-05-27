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
      <path d="M448.5 384c0 41.5-13.1 79.9-35.5 111.3-7.9 11.1-21.2 16.7-34.8 16.7l-243.3 0c-13.7 0-26.9-5.6-34.8-16.7-22.4-31.4-35.5-69.8-35.5-111.3 0-71.1 38.6-133.1 96-166.3l0-153.7c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 153.7c14.2 8.2 27.2 18.2 38.8 29.6l39.3-39.3-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16 16 32 32 48 48 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3c17.3 28.9 27.3 62.6 27.3 98.8zM288.5 64l-64 0 0 190.6-32 18.5c-19.5 11.3-35.7 27.5-46.9 46.9l221.8 0c-11.2-19.4-27.4-35.6-46.9-46.9l-32-18.5 0-190.6z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bong
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bong (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bong {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bong {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bong 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bong 3s ease-in-out infinite alternate;
}
</style>