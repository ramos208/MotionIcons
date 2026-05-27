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
      <path d="M21.693 3.162H3.33L0 6.49v14.348h20.671L24 17.51V3.162zM12.785 18.4l-1.562.728-1.35-2.217c-.196.057-.499.09-.924.09-1.579 0-2.683-.425-3.305-1.276-.622-.85-.932-2.2-.932-4.033 0-1.84.319-3.206.949-4.098.63-.892 1.726-1.341 3.288-1.341 1.562 0 2.658.441 3.28 1.333.63.883.94 2.25.94 4.098 0 1.219-.13 2.2-.384 2.945-.261.752-.679 1.325-1.268 1.718zm4.736-1.587c-.858 0-1.447-.196-1.766-.59-.32-.392-.483-1.136-.483-2.232v-3.534H14.11V9.051h1.162V6.843h1.644V9.05h2.094v1.415h-2.094v3.346c0 .622.05 1.03.14 1.227.09.204.326.303.695.303l1.243-.05.073 1.326c-.67.13-1.186.196-1.546.196zm-8.58-9.08c-.95 0-1.604.311-1.963.94-.352.63-.532 1.629-.532 3.011 0 1.374.172 2.364.515 2.953.344.589 1.006.892 1.98.892.973 0 1.628-.295 1.971-.876.335-.58.507-1.57.507-2.953 0-1.39-.172-2.396-.523-3.026-.352-.63-1.006-.94-1.955-.94Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: qt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for qt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-qt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-qt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-qt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-qt 3s ease-in-out infinite alternate;
}
</style>