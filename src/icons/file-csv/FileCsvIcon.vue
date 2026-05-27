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
      <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM264 380c-24.3 0-44 19.7-44 44l0 80c0 24.3 19.7 44 44 44l16 0c24.3 0 44-19.7 44-44l0-8c0-11-9-20-20-20s-20 9-20 20l0 8c0 2.2-1.8 4-4 4l-16 0c-2.2 0-4-1.8-4-4l0-80c0-2.2 1.8-4 4-4l16 0c2.2 0 4 1.8 4 4l0 8c0 11 9 20 20 20s20-9 20-20l0-8c0-24.3-19.7-44-44-44l-16 0zm136 0c-28.7 0-52 23.3-52 52s23.3 52 52 52c6.6 0 12 5.4 12 12s-5.4 12-12 12l-32 0c-11 0-20 9-20 20s9 20 20 20l32 0c28.7 0 52-23.3 52-52s-23.3-52-52-52c-6.6 0-12-5.4-12-12s5.4-12 12-12l24 0c11 0 20-9 20-20s-9-20-20-20l-24 0zm96 0c-11 0-20 9-20 20l0 31.6c0 35.5 10.5 70.3 30.2 99.8l5.1 7.7c3.7 5.6 10 8.9 16.6 8.9s12.9-3.3 16.6-8.9l5.1-7.7c19.7-29.6 30.2-64.3 30.2-99.8l0-31.6c0-11-9-20-20-20s-20 9-20 20l0 31.6c0 19.6-4.1 38.9-12 56.7-7.9-17.8-12-37.1-12-56.7l0-31.6c0-11-9-20-20-20z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-csv
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-csv (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-csv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-csv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-csv 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-csv 3s ease-in-out infinite alternate;
}
</style>