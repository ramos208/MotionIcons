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
      <path d="M64-32A56 56 0 1 1 64 80 56 56 0 1 1 64-32zM0 171.1c0-32.6 26.5-59.1 59.1-59.1 23.5 0 45.5 11.3 59.1 30.4l48.7 68.2c5.8 8.2 15.1 13.1 25.1 13.4l0-96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c10-.3 19.3-5.2 25.1-13.4l48.7-68.2c13.6-19.1 35.6-30.4 59.1-30.4 32.6 0 59.1 26.5 59.1 59.1L576 272c0 30.2-14.2 58.7-38.4 76.8l-76.8 57.6c-8.1 6-12.8 15.5-12.8 25.6l0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80c0-30.2 14.2-58.7 38.4-76.8l41.6-31.2 0-80.1-2.8 3.9c-18 25.2-47.1 40.2-78.1 40.2L352 288c-.6 0-1.3 0-1.9-.1-.6 0-1.3 .1-1.9 .1l-120.4 0c-.6 0-1.3 0-1.9-.1-.6 0-1.3 .1-1.9 .1l-31.1 0c-31 0-60.1-15-78.1-40.2l-2.8-3.9 0 80.1 41.6 31.2C177.8 373.3 192 401.8 192 432l0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80c0-10.1-4.7-19.6-12.8-25.6L38.4 348.8C14.2 330.7 0 302.2 0 272L0 171.1zM0 379.3c3.1 2.7 6.3 5.4 9.6 7.9L64 428 64 512c0 17.7-14.3 32-32 32S0 529.7 0 512L0 379.3zM568 24a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zm8 488c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-84 54.4-40.8c3.3-2.5 6.5-5.1 9.6-7.9L576 512z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: people-carry-box
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for people-carry-box (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-people-carry-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-people-carry-box {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-people-carry-box 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-people-carry-box 3s ease-in-out infinite alternate;
}
</style>