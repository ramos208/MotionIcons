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
      <path d="M240 40c0 13.6 5.8 26.5 15.8 35.6l26.5 23.8c24 21.6 37.7 52.3 37.7 84.6 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-18.7-7.9-36.4-21.8-48.9l-26.5-23.8C203.5 93.1 192 67.2 192 40 192 26.7 202.7 16 216 16s24 10.7 24 24zM0 336l0-80c0-35.3 28.7-64 64-64l19.7 0c8.1 0 16.2 1.6 23.8 4.6l137.1 54.8c7.6 3 15.6 4.6 23.8 4.6L384 256c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 336zm96-16c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24zm152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80zm104-24c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24zM328 16c13.3 0 24 10.7 24 24 0 13.6 5.8 26.5 15.8 35.6l26.5 23.8c24 21.6 37.7 52.3 37.7 84.6 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-18.7-7.9-36.4-21.8-48.9l-26.5-23.8C315.5 93.1 304 67.2 304 40 304 26.7 314.7 16 328 16zM64 40a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hot-tub-person
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hot-tub-person (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hot-tub-person {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hot-tub-person {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hot-tub-person 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hot-tub-person 3s ease-in-out infinite alternate;
}
</style>