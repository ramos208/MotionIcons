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
      <path d="M73-24.9c-9.4-9.4-24.6-9.4-33.9 0S29.7-.3 39 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L321.8 224c56.6-1 102.2-47.2 102.2-104 0-57.4-46.6-104-104-104-56.8 0-103 45.6-104 102.2L73-24.9zM512 288c-17.2 0-33.7 3.4-48.7 9.6l170 170c4.2-5.4 6.7-12.2 6.7-19.6l0-32c0-70.7-57.3-128-128-128zM59.9 97.7c-21.5 12.5-35.9 35.7-35.9 62.3 0 39.8 32.2 72 72 72 26.6 0 49.8-14.4 62.3-35.9L59.9 97.7zM250.2 288C196.8 313.9 160 368.7 160 432l0 16c0 17.7 14.3 32 32 32l250.2 0-192-192zM128 288C57.3 288 0 345.3 0 416l0 32c0 17.7 14.3 32 32 32l86.7 0c-4.3-9.8-6.7-20.6-6.7-32l0-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4zM616 160a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: users-slash
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for users-slash (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-users-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-users-slash {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-users-slash 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-users-slash 3s ease-in-out infinite alternate;
}
</style>