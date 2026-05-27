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
      <path d="M3.6644 16.9864L3 13H21L20.3356 16.9864C19.9365 19.3809 19.737 20.5781 18.8977 21.2891C18.0585 22 16.8448 22 14.4172 22H9.58276C7.15525 22 5.94149 22 5.10226 21.2891C4.26302 20.5781 4.06348 19.3809 3.6644 16.9864Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.6 10C19.1333 9.44772 19.1333 8.55228 18.6 8C18.0667 7.44772 18.0667 6.55228 18.6 6M15.4 10C15.9333 9.44772 15.9333 8.55228 15.4 8C14.8667 7.44772 14.8667 6.55228 15.4 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 13H2M21 13H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 13V9.8513C5 8.82886 5.82885 8 6.8513 8C8.18 8 9.40683 8.71196 10.0661 9.8656L13 15M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hot-tube
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hot-tube (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hot-tube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hot-tube {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hot-tube 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hot-tube 3s ease-in-out infinite alternate;
}
</style>