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
      <path d="M320 33.8l0 126.2-271.5 0c51.7-77.2 139.6-128 239.5-128 10.8 0 21.5 .6 32 1.8zM368 160l0-116.7c66 19 122.2 61 159.5 116.7L368 160zM22.6 208l73.4 0 0 112-96 0c0-39.7 8-77.6 22.6-112zM176 320l-32 0 0-112 288 0 0 112-32 0 0 48 176 0 0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64 176 0 0-48zm304 0l0-112 73.4 0C568 242.4 576 280.3 576 320l-96 0zM288 288c-35.3 0-64 28.7-64 64l0 80 128 0 0-80c0-35.3-28.7-64-64-64z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: igloo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for igloo (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-igloo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-igloo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-igloo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-igloo 3s ease-in-out infinite alternate;
}
</style>