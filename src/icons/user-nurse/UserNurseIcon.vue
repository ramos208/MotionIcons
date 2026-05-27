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
      <path d="M96 44.9c0-12.7 7.5-24.2 19.2-29.3l96-42c8.2-3.6 17.5-3.6 25.7 0l96 42C344.5 20.7 352 32.2 352 44.9l0 99.1c0 70.7-57.3 128-128 128S96 214.7 96 144l0-99.1zM304 128l-111.6 0-.4 0-48 0 0 16c0 44.2 35.8 80 80 80s80-35.8 80-80l0-16zM208 16l0 16-16 0c-4.4 0-8 3.6-8 8l0 16c0 4.4 3.6 8 8 8l16 0 0 16c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16 16 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8l-16 0 0-16c0-4.4-3.6-8-8-8L216 8c-4.4 0-8 3.6-8 8zM142.6 323c-6.5-4.9-15.2-6.2-22.6-2.8-61.4 28.2-104.1 90.2-104.1 162.1 0 16.4 13.3 29.7 29.7 29.7l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-72-42.7-134-104.1-162.1-7.4-3.4-16.1-2.1-22.6 2.8l-67 50.2c-8.5 6.4-20.3 6.4-28.8 0l-67-50.2z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-nurse
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-nurse (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-nurse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-nurse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-nurse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-nurse 3s ease-in-out infinite alternate;
}
</style>