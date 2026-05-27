<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M4 11.9949L4 14.5404C4 17.7871 4 19.4104 4.88607 20.5099C5.06508 20.732 5.26731 20.9344 5.48933 21.1135C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.8859C12.9044 21.8622 12.9702 21.8349 13.0345 21.8042C13.3436 21.6563 13.593 21.4067 14.0919 20.9076L18.8284 16.1686C19.4065 15.5903 19.6955 15.3011 19.8478 14.9334C20 14.5656 20 14.1567 20 13.3388V9.99394C20 6.2208 20 4.33423 18.8284 3.16206C17.8971 2.23022 16.5144 2.03917 14.0919 2M13 21.4997V20.9995C13 18.1696 13 16.7547 13.8787 15.8756C14.7574 14.9965 16.1716 14.9965 19 14.9965H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 9L4 2M11 2L4 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-remove
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for file-remove (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-remove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-remove {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-remove 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-remove 3s ease-in-out infinite alternate;
}
</style>