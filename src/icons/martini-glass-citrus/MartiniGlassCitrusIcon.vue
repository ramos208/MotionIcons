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
      <path d="M576 80c0-44.2-35.8-80-80-80-18 0-34.6 6-48 16l-81 0c23.6-47.4 72.5-80 129-80 79.5 0 144 64.5 144 144S575.5 224 496 224c-6.5 0-13-.4-19.3-1.3l64-74.7c1.1-1.3 2.2-2.7 3.3-4.1 19.4-14.6 32-37.8 32-64zM66.9 82.6C72.2 71.3 83.5 64 96 64l384 0c12.5 0 23.8 7.3 29.1 18.6s3.4 24.7-4.8 34.2l-184.3 215 0 116.2 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-116.2-184.3-215c-8.1-9.5-10-22.8-4.8-34.2zM165.6 128L288 270.8 410.4 128 165.6 128z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: martini-glass-citrus
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for martini-glass-citrus (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-martini-glass-citrus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-martini-glass-citrus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-martini-glass-citrus 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-martini-glass-citrus 3s ease-in-out infinite alternate;
}
</style>