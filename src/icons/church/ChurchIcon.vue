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
      <path d="M280-8c0-13.3-10.7-24-24-24S232-21.3 232-8l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 48-98.6 65.8C120 186.7 112 201.6 112 217.7l0 38.3-79.8 45.6C12.3 313 0 334.2 0 357.1L0 448c0 35.3 28.7 64 64 64 74.7 0 85.4 0 320 0l64 0c35.3 0 64-28.7 64-64l0-90.9c0-23-12.3-44.2-32.2-55.6L400 256 400 217.7c0-16-8-31-21.4-39.9l-98.6-65.8 0-48 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM256 320c35.3 0 64 28.7 64 64l0 80-128 0 0-80c0-35.3 28.7-64 64-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: church
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for church (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-church {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-church {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-church 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-church 3s ease-in-out infinite alternate;
}
</style>