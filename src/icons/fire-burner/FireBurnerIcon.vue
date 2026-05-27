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
      <path d="M281.7 48.3L294 34.5c5.4-6.1 13.3-8.8 20.9-8.9 7.2 0 14.3 2.6 19.9 7.8 19.7 18.3 39.8 43.2 55 70.6 15.1 27.2 26.2 58.1 26.2 88.1 0 88.7-71.3 159.8-160 159.8-89.6 0-160-71.3-160-159.8 0-37.3 16-73.4 36.8-104.5 20.9-31.3 47.5-59 70.9-80.2 5.7-5.2 13.1-7.7 20.3-7.5s13.4 3.2 18.8 7.5c14.4 11.4 38.9 40.7 38.9 40.7zM320 240.2c0-36.5-37-73-54.8-88.4-5.4-4.7-13.1-4.7-18.5 0-17.7 15.4-54.8 51.9-54.8 88.4 0 35.3 28.7 64 64 64s64-28.7 64-64zM92.8 320c37.7 48.3 96.1 80 163.2 80 66.5 0 125.1-31.7 163-80l45 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l44.8 0zM456 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fire-burner
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fire-burner (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fire-burner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fire-burner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fire-burner 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fire-burner 3s ease-in-out infinite alternate;
}
</style>